import { Controller, Get } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private readonly type: TypeService) {}

  @Get()
  findAll(){
    return this.type.findAll();
  }
}
