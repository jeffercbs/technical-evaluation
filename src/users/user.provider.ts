import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { DB_KEY } from '../constans';

export const UsersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(User),
    inject: [DB_KEY],
  },
];
