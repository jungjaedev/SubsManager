import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import config from '../ormconfig';
import { Language } from './language/language.entity';
import { LanguageController } from './language/language.controller';
import { Currency } from './currency/currency.entity';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyService } from './currency/currency.service';
import { LanguageService } from './language/language.service';
import { Period } from './period/period.entity';
import { PeriodController } from './period/period.controller';
import { PeriodService } from './period/period.service';
import { Type } from './type/type.entity';
import { TypeController } from './type/type.controller';
import { TypeService } from './type/type.service';
import { Category } from './category/category.entity';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { UserProduct } from './userProduct/userProduct.entity';
import { UserProductController } from './userProduct/userProduct.controller';
import { UserProductService } from './userProduct/userProduct.service';
import { UserService } from './user/user.service';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Language]),
    TypeOrmModule.forFeature([Currency]),
    TypeOrmModule.forFeature([Period]),
    TypeOrmModule.forFeature([UserProduct]),
    TypeOrmModule.forFeature([Type]),
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Product]),
    AuthModule, 
    // JwtModule
  ],
  controllers: [
    AppController,
    UserController,
    LanguageController,
    CurrencyController,
    PeriodController,
    UserProductController,
    TypeController,
    CategoryController,
    ProductController,
  ],
  providers: [
    AppService,
    UserService,
    LanguageService,
    CurrencyService,
    PeriodService,
    UserProductService,
    TypeService,
    CategoryService,
    ProductService,
    // AuthService,
    // JwtService
  ],
})
export class AppModule {}
