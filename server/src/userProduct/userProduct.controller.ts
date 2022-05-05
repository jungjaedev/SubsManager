import { Body, Controller, Request,Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserProductService } from './userProduct.service';
import { UserProduct } from './userProduct.entity';



@Controller('userProduct')
export class UserProductController {
  constructor(private readonly userProduct: UserProductService) {}

  @Post('/')
  async create(
    @Body() userProduct: UserProduct, @Request() req
    )  {
      console.log(req)
      return await this.userProduct.createUserProduct(userProduct)
    }
}
