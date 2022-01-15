import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ServiceController } from './service/service.controller';
import { UserModule } from './user/user.module';
import { UserServiceModule } from './user-service/user-service.module';
import config from '../ormconfig';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, UserServiceModule],
  controllers: [AppController, UserController, ServiceController],
  providers: [AppService, UserService],
})
export class AppModule {}
