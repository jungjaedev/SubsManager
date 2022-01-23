import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Currency } from './currency.entity';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency) private currencyRepository: Repository<Currency>,
  ) {}

  async findAll() {
    return this.currencyRepository.find()
  }
}
