import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly language: LanguageService) {}

  @Get()
  findAll(){
    console.log('language')
    return this.language.findAll();
  }
}
