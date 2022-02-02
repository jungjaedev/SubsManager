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

  
  async updateUser(
    id: number, user: User
  )  {
    const selectedUser = await this.findById(id);
    if(user.password.length) {
      selectedUser.password = user.password;
    }
    selectedUser.account = user.account;
    selectedUser.email = user.email;
    selectedUser.languageId =  Number(user.languageId);
    selectedUser.currencyId = Number(user.currencyId);
    await this.userRepository.update({id},selectedUser);
    const updatedUser = await this.findById(id);
    return updatedUser
  }


  async findOne(account: string): Promise<User | undefined> {
    const user =  this.userRepository.findOne({account : account});
    return user;
  }

  async findById(id: number): Promise<User | undefined> {
    const user =  this.userRepository.findOne({id : id});
    return user;
  }



  
}
