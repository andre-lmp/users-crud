import { Users } from '@prisma/client';
import {
  IsAlpha,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateUserDto implements Partial<Users> {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsOptional()
  course: string;

  @IsNotEmpty()
  @IsDate()
  birthDay: Date;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  State: string;
}
