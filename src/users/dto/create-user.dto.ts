import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Unique username for the user account',
    example: 'admin',
    minLength: 3,
    maxLength: 50,
    pattern: '^[a-zA-Z0-9_]+$',
  })
  username: string;

  @ApiProperty({
    description: 'Password for the user account',
    example: 'admin',
    minLength: 6,
    maxLength: 100,
    format: 'password',
  })
  password: string;
}
