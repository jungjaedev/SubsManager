import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        if (!req || !req.cookies) return null;
        // console.log('req.cookies : ',req.cookies['access_token'])
        return req.cookies['access_token'];
      },
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    });
  }

  async validate(data: any): Promise<any> {
    console.log('data:', data)
    return true;
  }
}