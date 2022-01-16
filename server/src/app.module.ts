import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ServiceController } from './service/service.controller';
import { UserModule } from './user/user.module';
import { UserServiceModule } from './user_service/user_service.module';
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

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    UserServiceModule,
    LanguageModule,
    ServiceModule,
    PeriodModule,
    TypeModule,
    CategoryModule,
    CurrencyModule,
  ],
  controllers: [AppController, UserController, ServiceController, PeriodController, CategoryController],
  providers: [AppService, UserService, PeriodService, TypeService, CurrencyService, UserServiceService],
})
export class AppModule {}
