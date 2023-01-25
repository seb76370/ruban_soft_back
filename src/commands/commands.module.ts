import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandsController } from './commands.controller';
import { CommandsService } from './commands.service';
import { CommandsEntity } from './entities/commands.entity';

@Module({  imports: [
  TypeOrmModule.forFeature([CommandsEntity])],
  controllers: [CommandsController],
  providers: [CommandsService],
  exports:[CommandsService]
})
export class CommandsModule {}

