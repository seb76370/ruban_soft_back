import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { unique: true, nullable: true, default: null })
  @IsNotEmpty()
  login: string;

  @Column('text')
  @IsNotEmpty()
  password: string;

  @Column('text')
  salt: string;

}