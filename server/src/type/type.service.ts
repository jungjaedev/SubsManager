import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Type } from './type.entity';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type) private typeRepository: Repository<Type>,
  ) {}

  findOne(id: number) {
    return this.typeRepository.findOne({id:id})
  }

  findAll() {
    return this.typeRepository.find()
  }
}
