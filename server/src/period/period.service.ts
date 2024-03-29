import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Period } from './period.entity';

@Injectable()
export class PeriodService {
  constructor(
    @InjectRepository(Period) private periodRepository: Repository<Period>,
  ) {}

  findOne(id: number) {
    return this.periodRepository.findOne({id:id})
  }


  findAll() {
    return this.periodRepository.find()
  }
}
