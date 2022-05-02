import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service'
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt'



@Controller()
export class AppController {
  constructor(private readonly  appService: AppService, private authService: AuthService, private userService: UserService, private jwtAuthGuard: JwtAuthGuard, private jwtService: JwtService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    const account = req.body.username;
    const user = await this.userService.findOne(account)
    const loginUserData = await this.authService.login(user);
    const token = loginUserData.access_token;
    console.log(new Date(Date.now()), new Date(Date.now() + 1000 * 60 * 60))
    res.cookie('access_token', token, {
      httpOnly: true,
      domain: 'localhost', 
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    })
    .send({user: loginUserData.user})
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('auth')
  async checkLoggedIn(@Request() req, @Response() res) {
    const verify = await this.jwtAuthGuard.validateToken(req.cookies.access_token);
    if (verify) {
      const user = await this.userService.findOne(verify.account)  
      res.cookie('access_token', req.cookies.access_token, {
        httpOnly: true,
        domain: 'localhost', 
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      })  
      .json(user)
    }
    return verify;
  }

  @UseGuards(AuthGuard('jwt'))
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

