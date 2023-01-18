import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAllUser() {
    const users = await this.userRepository.find();
    users.forEach((user) => {
      delete user.password;
      delete user.salt;
    });
    return users;
  }

  async addUser(userData: UserDto) {
    const user = this.userRepository.create({
      ...userData,
    });

    //validation du format DTO
    const errors = await validate(user);
    if (errors.length > 0) {
      throw new ConflictException({
        statusCode: 409,
        message: 'validation errors',
        propertyErrors: errors[0]['property'],
        constraints: errors[0]['constraints'],
      });
    }

    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    try {
      await this.userRepository.save(user);
      return { statusCode: 200, message: 'Ajout OK' };
      //return user;
    } catch (e) {
      throw new ConflictException(e.sqlMessage);
    }
  }

  async updateUser(userData: UserDto) {
    const user = this.userRepository.create({
      ...userData,
    });

    //validation du format DTO
    const errors = await validate(user);
    if (errors.length > 0) {
      throw new ConflictException({
        statusCode: 409,
        message: 'validation errors',
        propertyErrors: errors[0]['property'],
        constraints: errors[0]['constraints'],
      });
    }

    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    const where = {
      login: userData.login,
    };

    const userFound = await this.userRepository.findOne({
      where: where,
    });

    await this.userRepository.update(userFound.id, user);

    return { statusCode: 200, message: 'Update OK' };
  }
}
