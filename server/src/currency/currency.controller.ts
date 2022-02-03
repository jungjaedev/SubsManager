import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currency: CurrencyService) {}

  @Get()
  findAll(){
    return this.currency.findAll();
  }
}
