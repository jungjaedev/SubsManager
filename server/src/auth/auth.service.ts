import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(account: string, password: string): Promise<any> {
    const user = await this.userService.findOne(account);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { account: user.account, userId: user.id, };
    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }

  async logout(user: any) {
    return {
      access_token: '',
    };
  }
}