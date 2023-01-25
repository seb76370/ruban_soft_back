import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Post('addCustomer')
  addCustomer(@Body() Datas: CustomerDto) {
    console.log(Datas);

    return this.customerService.addCustomer(Datas);
  }

  @Get('getCustomers')
  findAlluser() {
    return this.customerService.GetAll();
  }
}
