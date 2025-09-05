import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<any | undefined> {
    try {
      const user = await this.userRepository.findOneBy({ username });
      if (!user) {
        return undefined;
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }

  async create(user: CreateUserDto): Promise<User> {
    try {
      const newUser = this.userRepository.create(user);
      return this.userRepository.save(newUser);
    } catch (error) {
      throw new InternalServerErrorException('uppps,', error.message);
    }
  }
}
