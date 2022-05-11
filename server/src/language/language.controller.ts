import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly language: LanguageService) {}

  @Get()
  async findAll(){
    const languageList = await this.language.findAll()
    languageList.forEach((item, index) => {
      item['blahblah'] = index
      return item
    })
    return languageList
  }
}
