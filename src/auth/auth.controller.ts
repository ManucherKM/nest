import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() target: AuthLoginDto) {
    return this.authService.login(target);
  }

  @Post('register')
  async register(@Body() target: AuthRegisterDto) {
    return this.authService.register(target);
  }
}
