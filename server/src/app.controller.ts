import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard';



@Controller()
export class AppController {
  constructor(private readonly  appService: AppService, private authService: AuthService, private userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    const account = req.body.username;
    const user = await this.userService.findOne(account)
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    const {account, password} = req.body
    const user = await this.authService.validateUser(account, password)
    return this.authService.logout(user);
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

