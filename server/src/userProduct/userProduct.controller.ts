import { Body, Controller, Request,Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserProductService } from './userProduct.service';
import { ProductService } from '../product/product.service';
import { UserProduct } from './userProduct.entity';

import jwtDecode from "jwt-decode"



@Controller('userProduct')
export class UserProductController {
  constructor(private readonly userProduct: UserProductService) {}

  @Post('/')
  async create(
    @Body() userProduct: UserProduct, @Request() req, productService: ProductService
    )  {
      const user =jwtDecode(req.cookies.access_token)
      const data = req.body
      // console.log('data : ', data)
      // console.log('user : ', user)
      if(!data.product.id) {
        console.log('1111', data.product.name)
        const name = data.product.name.toLowerCase().replace(' ','_')
        const newProduct = { 
          'name' :name,
          'display_name': data.product.name,
          'url': '',
          'categoryId': data.category.id, 
          'display_name_ko': '',
        }
        return await productService.createProduct(newProduct)
        

      } else {
        const newProductData = { 
          'typeId': data.type.id,
          'userId': user['userId'],
          'periodId': data.period.id,
          'currencyId': data.currency.id
        }
        console.log('newProductData : ', newProductData)

      }
      return await this.userProduct.createUserProduct(userProduct)
    }
}

// product - name, display_name, url, categoryId, display_name_ko

