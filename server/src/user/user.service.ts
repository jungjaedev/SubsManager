import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRespository: Repository<User>,
  ) {}

  createUser(
    account: string,
    email: string,
    password: string,
    language_id: number,
    currency_id: number,
  ): Promise<User> {
    const newUser = this.userRespository.create({
      account,
      email,
      password,
      language_id,
      currency_id,
    });
    return this.userRespository.save(newUser);
  }
}
