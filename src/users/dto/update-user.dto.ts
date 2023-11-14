import { Users } from '@prisma/client';

export class UpdateUserDto implements Partial<Users> {
  id: number;
}
