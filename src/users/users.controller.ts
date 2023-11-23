import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return await this.usersService.create(userData);
  }

  @Get()
  findUsers() {
    return this.usersService.findUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.usersService.findUser(Number(id));
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return await this.usersService.updateUser(Number(id), userData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.removeUser(Number(id));
  }
}
