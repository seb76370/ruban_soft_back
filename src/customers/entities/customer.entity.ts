import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { CommandsController } from 'src/commands/commands.controller';
import { CommandsEntity } from 'src/commands/entities/commands.entity';

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

  @OneToMany(
    type=>CommandsEntity,
    (command)=>command.customer
  )

  command:CommandsEntity

}