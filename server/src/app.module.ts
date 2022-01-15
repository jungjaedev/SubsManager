import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ServiceController } from './service/service.controller';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { UserServiceModule } from './user-service/user-service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    UserServiceModule,
  ],
  controllers: [AppController, UserController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
