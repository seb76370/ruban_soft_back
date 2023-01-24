import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { unique: true, nullable: true, default: null })
  @IsNotEmpty()
  Firstname: string;

  @Column('text', { unique: true, nullable: true, default: null })
  @IsNotEmpty()
  Name: string;

  @Column('text', { unique: true, nullable: true, default: null })
  @IsEmail()
  email: string;

  @Column('text')
  @IsNumber()
  phonenumber: number;

  @Column('text')
  @IsNumber()
  Siret: number;

  @Column('text')
  adress: string;

}