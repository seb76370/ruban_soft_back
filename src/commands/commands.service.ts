import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { CustomersService } from 'src/customers/customers.service';
import { Repository } from 'typeorm';
import { CommandsDto } from './dto/commands.dto';
import { CommandsEntity } from './entities/commands.entity';

@Injectable()
export class CommandsService {
  constructor(
    @InjectRepository(CommandsEntity)
    private commandRepository: Repository<CommandsEntity>,
    private customerServices: CustomersService,
  ) {}

  async GetAll(): Promise<CommandsEntity[]> {
    const commands = await this.commandRepository.find();
    return commands;
  }

  async addCommand(CustomerData: CommandsDto) {
    const Command = this.commandRepository.create({
      ...CustomerData,
    });

    const customer = await this.customerServices.GetBySiret(+CustomerData.Siret);

    if (!customer)
    {
      return ({"statusCode":"409","message":"Client Inconnu"})
    }
    

    //validation du format DTO
    const errors = await validate(Command);
    if (errors.length > 0) {
      throw new ConflictException({
        statusCode: 409,
        message: 'validation errors',
        propertyErrors: errors[0]['property'],
        constraints: errors[0]['constraints'],
      });
    }

    Command.customer = customer;
    

    try {
      await this.commandRepository.save(Command);
      return { statusCode: 200, message: 'Ajout OK' };
      //return user;
    } catch (e) {
      throw new ConflictException(e.sqlMessage);
    }
  }
}
