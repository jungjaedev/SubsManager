import { Controller, Get } from '@nestjs/common';

@Controller('service')
export class ServiceController {
  @Get()
  findAll(): string {
    return 'This action returns all user!!';
  }
}
