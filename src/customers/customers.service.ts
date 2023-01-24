import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CustomerDto } from './dto/customer.dto';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class CustomersService {
constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository : Repository<CustomerEntity>
){}



async addCustomer(CustomerData: CustomerDto) {
  console.log("toto");
    const Customer = this.customerRepository.create({
      ...CustomerData,
    });

 //validation du format DTO
 const errors = await validate(Customer);
 if (errors.length > 0) {
   throw new ConflictException({
     statusCode: 409,
     message: 'validation errors',
     propertyErrors: errors[0]['property'],
     constraints: errors[0]['constraints'],
   });
 }

 try {
    await this.customerRepository.save(Customer);
    return { statusCode: 200, message: 'Ajout OK' };
    //return user;
  } catch (e) {
    throw new ConflictException(e.sqlMessage);
  }


}

}
