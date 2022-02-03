import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';



@Controller('category')
export class CategoryController {
  constructor(private readonly category: CategoryService) {}
  

  @Get()
  findAll(){
    return this.category.findAll();
  }
}
