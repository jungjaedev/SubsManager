import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProductController } from './userProduct.controller';
import { UserProduct } from './userProduct.entity';
import { UserProductService } from './userProduct.service';
import { ProductModule } from '../product/product.module';
import { CurrencyModule } from '../currency/currency.module';
import { PeriodModule } from '../period/period.module';
import {TypeModule } from '../type/type.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserProduct]), ProductModule,CurrencyModule, PeriodModule, TypeModule],
  controllers: [UserProductController],
  providers: [UserProductService],
})
export class UserProductModule {}
