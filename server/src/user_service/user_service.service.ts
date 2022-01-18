import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user_service.entity';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectRepository(UserService) private userServiceRespository: Repository<UserService>,
  ) {}
}
