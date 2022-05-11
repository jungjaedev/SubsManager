import { Body, Controller, Request,Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserProductService } from './userProduct.service';
import { ProductService } from '../product/product.service';

import jwtDecode from "jwt-decode"

@Controller('userProduct')
export class UserProductController {
  constructor(private readonly userProduct: UserProductService, private readonly product: ProductService) {}

  @Get()
  async findUserProductByUserId(  @Request() req ){
    const user = await jwtDecode(req.cookies.access_token)
    return this.userProduct.findUserProductByUserId(user);
  }

  @Post('/')
  async create(
    @Body() @Request() req,
    )  {
      const user = await jwtDecode(req.cookies.access_token)
      const data = req.body
      data['userId'] = user['userId']
      if(!data.product.id) {
        const newProduct = {
          name : data.product.name.toLowerCase().replace(' ','_'),
          display_name : data.product.name,
          url : '',
          display_name_ko : '',
          categoryId : parseInt(data.category.id)
        }
        data.product = { ...newProduct }
        await this.product.createProduct(data.product)
      }
      return await this.userProduct.createUserProduct(data)
    }
}
