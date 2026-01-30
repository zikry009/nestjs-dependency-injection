import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Handles GET requests to retrieve all users.
   * @param role - The role of the users to retrieve.
   * @returns An object containing the list of all users, a message, status, and code.
   */
  @Get('/')
  getAllUsers(@Query('role') role: string) {
    return this.usersService.getAllUsers(role);
  }

  /**
   * Handles POST requests to create a new user.
   * @param createUserDto - The user data to create.
   * @returns An object containing the created user data, a message, status, and code.
   */
  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
