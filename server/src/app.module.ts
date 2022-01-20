import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import config from '../ormconfig';
import { UserService } from './user/user.service';
import { Language } from './language/language.entity';
import { LanguageController } from './language/language.controller';
import { Currency } from './currency/currency.entity';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyService } from './currency/currency.service';
import { LanguageService } from './language/language.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Language]),
    TypeOrmModule.forFeature([Currency]),
  ],
  controllers: [
    AppController,
    UserController,
    LanguageController,
    CurrencyController
  ],
  providers: [
    AppService,
    UserService,
    LanguageService,
    CurrencyService
  ],
})
export class AppModule {}
