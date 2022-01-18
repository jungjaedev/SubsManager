import { Controller, Get, Post } from '@nestjs/common';
import { Service } from './service.entity';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {


  }
  @Get()
  findAll(): string {
    return 'This action returns all service!!';
  }

  @Post()
  createBulkServices(): Promise<Service> {

    return this.serviceService.createBulkServices()}

  // @Post()
  // async createServices(): Promise<Service> {

  //   return this.serviceService.createService(
  //     'testservice',
  //     'test service',
  //     'atbceeawr.com',
  //   );
  // }
}
