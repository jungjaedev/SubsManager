import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProduct } from './userProduct.entity';

@Injectable()
export class UserProductService {
  constructor(
    @InjectRepository(UserProduct) private userProductRepository: Repository<UserProduct>,
  ) {}

  async createUserProduct(
    userProduct: UserProduct
  ) {
    return await this.userProductRepository.save(userProduct)
  }
}
