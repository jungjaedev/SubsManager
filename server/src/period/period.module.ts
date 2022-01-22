import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Period } from './period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Period])],
  providers: [PeriodService],
  controllers: [PeriodController]
})
export class PeriodModule {}
