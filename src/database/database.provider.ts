import { DB_KEY } from '../constans';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DB_KEY,
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '') || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DB,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return datasource.initialize();
    },
  },
];
