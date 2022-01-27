import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(
    user: User
  ) {
    return await this.userRepository.save(user)
  }


  async findOne(account: string): Promise<User | undefined> {
    console.log('userservice findOne!!!!');
    const user =  this.userRepository.findOne({account : account});
    return user;
  }

  // async authenticateUser(
  //   user: User
  // ) {
  //   return await this.userRepository.save(user)
  // }

  
}
