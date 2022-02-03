import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
      
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number, @Body() user: User
  ) {
    return await this.user.updateUser(id, user)
  }
}
