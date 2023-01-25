import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from 'src/customers/customers.module';
import { CommandsController } from './commands.controller';
import { CommandsService } from './commands.service';
import { CommandsEntity } from './entities/commands.entity';

@Module({  imports: [
  TypeOrmModule.forFeature([CommandsEntity]),CustomersModule],
  controllers: [CommandsController],
  providers: [CommandsService],
  exports:[CommandsService]
})
export class CommandsModule {}

