import { Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly product: ProductService 
    ) {}
/** 
 *  TODO : use this function to add product bulk data
    @Post('set_data')
    async createBulkProducts( )
      {
      return await this.product.createBulkProducts()
    }
*/
}



