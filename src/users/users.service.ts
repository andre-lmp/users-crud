import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userData: CreateUserDto) {
    try {
      const newUser = await this.prisma.users.create({ data: userData });
      return { message: 'Usuário criado com sucesso!', newUser };
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new InternalServerErrorException(
        'Ocorreu um erro ao criar o usuário.',
      );
    }
  }

  async findUsers() {
    try {
      const allUsers = await this.prisma.users.findMany();
      return allUsers.length
        ? allUsers
        : { message: 'Nenhum usuário encontrado.' };
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw new InternalServerErrorException(
        'Ocorreu um erro ao buscar usuários.',
      );
    }
  }

  async findUser(id: number) {
    try {
      const user = await this.prisma.users.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('Usuário não encontrado.');
      }
      return user;
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      throw new InternalServerErrorException(
        'Ocorreu um erro ao buscar o usuário.',
      );
    }
  }

  async updateUser(id: number, userData: UpdateUserDto) {
    try {
      const updatedUser = await this.prisma.users.update({
        where: { id },
        data: userData,
      });
      return { message: 'Usuário atualizado com sucesso!', updatedUser };
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new InternalServerErrorException(
        'Ocorreu um erro ao atualizar o usuário.',
      );
    }
  }

  async removeUser(id: number) {
    try {
      await this.prisma.users.delete({ where: { id } });
      return { message: 'Usuário removido com sucesso!' };
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
      throw new InternalServerErrorException(
        'Ocorreu um erro ao remover o usuário.',
      );
    }
  }
}
