import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthStrategy } from './auth.strategy';
import { JwtService } from '@nestjs/jwt';




@Module({
  imports: [TypeOrmModule.forFeature(
    [User]), 
    PassportModule, 
    JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '3000s' },
  })],
  providers: [
    AuthService, 
    AuthStrategy, 
    LocalStrategy, 
    // JwtStrategy, 
    // JwtService,
    UserService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
