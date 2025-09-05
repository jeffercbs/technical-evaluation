import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Computador Lenovo',
    minLength: 1,
    maxLength: 255,
  })
  name: string;

  @ApiProperty({
    description: 'The price of the product in USD',
    example: 21.099,
    minimum: 0,
    type: 'number',
    format: 'decimal',
  })
  price: number;

  @ApiProperty({
    description: 'A detailed description of the product',
    example: 'Latest iPhone with advanced camera system and A17 Pro chip',
    minLength: 1,
    maxLength: 1000,
  })
  description: string;

  @ApiProperty({
    description: 'URL of the product image',
    format: 'url',
  })
  imageUrl: string;
}
