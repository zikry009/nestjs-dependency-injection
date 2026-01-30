import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoggerService } from 'src/common/logger/logger.service';

@Injectable()
export class UsersService {
  private readonly users: Array<CreateUserDto & { id: string }> = [];
  constructor(private readonly logger: LoggerService) {}
  /**
   * Retrieves all users.
   * @param role - The role of the users to retrieve.
   * @returns An object containing the list of all users, a message, status, and code.
   */
  getAllUsers(role: string | undefined): object {
    let users: Array<CreateUserDto & { id: string }> = [];
    if (role) {
      users = this.users.filter((user) => user.role === role);
    } else {
      users = this.users;
    }
    return {
      data: users,
      message: 'Users fetched successfully',
      status: 'success',
      code: 200,
    };
  }
  /**
   * Creates a new user.
   * @param createUserDto - The user data to create.
   * @returns An object containing the created user data, a message, status, and code.
   */
  createUser(createUserDto: CreateUserDto): object {
    const user = { id: String(this.users.length + 1), ...createUserDto };
    this.users.push(user);
    this.logger.log(`User created: ${user.username}`);
    return {
      data: user,
      message: 'User created successfully',
      status: 'success',
      code: 201,
    };
  }
}
