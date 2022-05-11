import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProduct } from './userProduct.entity';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class UserProductService {
  constructor(
    @InjectRepository(UserProduct) private userProductRepository: Repository<UserProduct>,
    @Inject(CurrencyService) private readonly currencyService: CurrencyService
  ) {}

  async findUserProductByUserId(user) {
    const userProductList = await this.userProductRepository.find({ where: {
      userId: user.userId
    }})
    const newList = userProductList.forEach((el) => {
      let data = this.currencyService.findOne(el.currencyId);
      console.log(data)
      return el;
    })
    console.log('333',newList)
  }

  async createUserProduct(
    userProduct: UserProduct
  ) {
    return await this.userProductRepository.save(userProduct)
  }
}
