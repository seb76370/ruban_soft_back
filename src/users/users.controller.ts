import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get('getUsers')
    findAlluser() {
      return this.userService.findAllUser()
    }

    @Post('addUser')
    addUser(@Body() userData: UserDto) {
      return this.userService.addUser(userData);
    }

    @Post('updateUser')
    updateUser(@Body() userData: UserDto) {
      return this.userService.updateUser(userData);
    }

    
}
