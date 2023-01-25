import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CommandsDto } from './dto/commands.dto';

@Controller('commands')
export class CommandsController {
    constructor(private commandsServices: CommandsService) {}

  @Post('addCommand')
  addCustomer(@Body() Datas: CommandsDto) {
    console.log(Datas);

    return this.commandsServices.addCommand(Datas);
  }

  @Get('getCommand')
  findAllCommand() {
    return this.commandsServices.GetAll();
  }
}
