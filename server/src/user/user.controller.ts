import { Body, Controller, Request,Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}
  
  // @Get()
  // findAll(): string {
    //   return 'This action returns all user!!';
    // }
    
    
  @Post('signup')
  async create(
    @Body() user: User
    )  {
      return await this.user.createUser(user)
    }
      
  // @UseGuards(JwtAuthGuard)
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: number, @Body() user: User,
    @Req() request
  ) {
    console.log('123123123',request.cookies)
    return await this.user.updateUser(id, user)
  }
}
