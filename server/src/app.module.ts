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

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Language]),
  ],
  controllers: [
    AppController,
    UserController,
    LanguageController,
  ],
  providers: [
    AppService,
    UserService,
  ],
})
export class AppModule {}
