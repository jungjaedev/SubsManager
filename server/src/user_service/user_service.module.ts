import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserServiceController } from './user_service.controller';
import { UserService } from './user_service.entity';
import { UserServiceService } from './user_service.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserService])],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
