import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ServiceController } from './service/service.controller';
import { UserModule } from './user/user.module';
import { UserServiceModule } from './user_service/user_service.module';
import { UserService as User_Service } from './user_service/user_service.entity';
import { User } from './user/user.entity';
import config from '../ormconfig';
import { UserService } from './user/user.service';
import { LanguageModule } from './language/language.module';
import { ServiceModule } from './service/service.module';
import { PeriodService } from './period/period.service';
import { PeriodController } from './period/period.controller';
import { PeriodModule } from './period/period.module';
import { TypeService } from './type/type.service';
import { TypeModule } from './type/type.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { CurrencyService } from './currency/currency.service';
import { CurrencyModule } from './currency/currency.module';
import { UserServiceService } from './user_service/user_service.service';
import { Language } from './language/language.entity';
import { Service } from './service/service.entity';
import { Period } from './period/period.entity';
import { Type } from './type/type.entity';
import { Category } from './category/category.entity';
import { Currency } from './currency/currency.entity';
import { UserServiceController } from './user_service/user_service.controller';
import { TypeController } from './type/type.controller';
import { CurrencyController } from './currency/currency.controller';
import { LanguageController } from './language/language.controller';
import { CategoryService } from './category/category.service';
import { ServiceService } from './service/service.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([User_Service]),
    TypeOrmModule.forFeature([Language]),
    TypeOrmModule.forFeature([Service]),
    TypeOrmModule.forFeature([Period]),
    TypeOrmModule.forFeature([Type]),
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Currency]),
  ],
  controllers: [
    AppController,
    UserController,
    ServiceController,
    PeriodController,
    CategoryController,
    UserServiceController,
    TypeController,
    CurrencyController,
    LanguageController,
  ],
  providers: [
    AppService,
    UserService,
    PeriodService,
    TypeService,
    CurrencyService,
    UserServiceService,
    TypeService,
    CategoryService,
    ServiceService,
  ],
})
export class AppModule {}
