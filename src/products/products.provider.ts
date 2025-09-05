import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { DB_KEY } from '../constans';

export const productsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Product),
    inject: [DB_KEY],
  },
];
