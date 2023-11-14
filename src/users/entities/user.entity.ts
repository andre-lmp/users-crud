import { Users } from '@prisma/client';
import {
  IsOptional,
  IsAlpha,
  IsDate,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class UserEntity implements Users {
  id: number;

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
