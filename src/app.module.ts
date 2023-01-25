import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CommandsModule } from './commands/commands.module';
import { EventsModule } from './events/events.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    CustomersModule,
    CommandsModule,
    EventsModule,
  ],
})
export class AppModule {}
