import { Injectable, ExecutionContext, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }
  async validateToken(token: string) {
    try {
      const verify = await this.jwtService.verify(token);
      return verify;
    } catch (e) {
      switch (e.message) {
        case 'INVALID_TOKEN':
        case 'TOKEN_IS_ARRAY':
        case 'NO_USER':
          throw new HttpException('유효하지 않은 토큰입니다.', 401);
        case 'EXPIRED_TOKEN':
          throw new HttpException('토큰이 만료되었습니다.', 410);
        default:
          throw new HttpException('서버 오류입니다.', 500);
      }
    }
  }
}