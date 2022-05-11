import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProductController } from './userProduct.controller';
import { UserProduct } from './userProduct.entity';
import { UserProductService } from './userProduct.service';
import { ProductModule } from '../product/product.module';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserProduct]), ProductModule,CurrencyModule],
  controllers: [UserProductController],
  providers: [UserProductService],
})
export class UserProductModule {}
