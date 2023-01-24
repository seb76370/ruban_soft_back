import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CustomerDto {

  @IsNotEmpty()
  Firstname: string;


  @IsNotEmpty()
  Name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;


  @IsNumber()
  phonenumber: number;


  @IsNumber()
  Siret: number;

  adress: string;

}
