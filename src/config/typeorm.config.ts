import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

let Sock: string;
if (process.env.SOCK === 'DEV') {
  Sock = null;
} else {
  Sock = '/var/run/mysqld/mysqld.sock';
}

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  //socketPath: Sock,
  host: process.env.HOST,
  port: +process.env.PORT_BDD,
  username: process.env.USERNAME_BDD || process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ['dist/**/**.entity.js'],
  synchronize: false,
};
