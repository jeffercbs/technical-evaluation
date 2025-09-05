import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Username for authentication',
    example: 'admin',
  })
  username: string;

  @ApiProperty({
    description: 'Password for authentication',
    example: 'admin!',
    format: 'password',
  })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT access token for authenticated requests',
  })
  access_token: string;
}

export class UserProfileDto {
  @ApiProperty({
    description: 'Unique identifier for the user',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  sub: string;

  @ApiProperty({
    description: 'Username of the authenticated user',
    example: 'admin',
  })
  username: string;

  @ApiProperty({
    description: 'Token issued at timestamp',
    example: 1516239022,
  })
  iat: number;

  @ApiProperty({
    description: 'Token expiration timestamp',
    example: 1516239082,
  })
  exp: number;
}
