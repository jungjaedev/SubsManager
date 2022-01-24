import { Controller, Get } from '@nestjs/common';
import { PeriodService } from './period.service';

@Controller('period')
export class PeriodController {
  constructor(private readonly period: PeriodService) {}

  @Get()
  findAll(){
    return this.period.findAll();
  }
}
