import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProductController } from './userProduct.controller';
import { UserProduct } from './userProduct.entity';
import { UserProductService } from './userProduct.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserProduct])],
  controllers: [UserProductController],
  providers: [UserProductService]
})
export class UserProductModule {}
