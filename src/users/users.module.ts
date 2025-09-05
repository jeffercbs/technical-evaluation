import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { UsersProviders } from './user.provider';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService],
})
export class UsersModule {}
