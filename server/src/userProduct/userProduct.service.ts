import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProduct } from './userProduct.entity';
import { CurrencyService } from '../currency/currency.service';
import { PeriodService } from '../period/period.service';
import { ProductService } from '../product/product.service';
import { TypeService } from '../type/type.service';

@Injectable()
export class UserProductService {
  constructor(
    @InjectRepository(UserProduct) private userProductRepository: Repository<UserProduct>,
    @Inject(CurrencyService) 
    private readonly currencyService: CurrencyService,
    private readonly periodService: PeriodService,
    private readonly productService: ProductService,
    private readonly typeService: TypeService,
  ) {}

  async findUserProductByUserId(user) {
    const userProductList = await this.userProductRepository.find({ where: {
      userId: user.userId
    }})

    for(const el of userProductList) {
      let currency = await this.currencyService.findOne(el.currencyId);
      let period = await this.periodService.findOne(el.periodId);
      let product = await this.productService.findOne(el.productId);
      let type = await this.typeService.findOne(el.typeId);
      el['currency'] = {...currency};
      el['period'] = {...period};
      el['product'] = {...product};
      el['type'] = {...type};
      delete el.currencyId;
      delete el.periodId;
      delete el.productId;
      delete el.typeId;
    }
    
    return userProductList
  }

  async createUserProduct(
    userProduct: UserProduct
  ) {
    return await this.userProductRepository.save(userProduct)
  }
}
