import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productsRepository.create(createProductDto);
      await this.productsRepository.save(product);
      return 'this product was created successfully';
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.productsRepository.find({});

      if (!products) return [];

      return products;
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }

  async findOne(id: string) {
    try {
      const productFound = await this.productsRepository.findOneBy({ id });

      if (!productFound) throw new NotFoundException('Product not found');

      return productFound;
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productsRepository.preload({
        id,
        ...updateProductDto,
      });

      if (!product) throw new NotFoundException('Product not found');

      this.productsRepository.save(product);
      return 'this product was updated successfully';
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }

  remove(id: string) {
    try {
      this.productsRepository.delete(id);
      return 'this product was deleted successfully';
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }
}
