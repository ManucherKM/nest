import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(target: AuthLoginDto) {
    const user = await this.validateUser(target);
    const token = await this.generateToken(user);
    return {
      token,
    };
  }

  async register(target: AuthRegisterDto) {
    const passwordHash = await bcrypt.hash(target.password, 5);

    const user = await this.userService.create({
      ...target,
      password: passwordHash,
    });

    const token = await this.generateToken(user);
    return {
      token,
    };
  }

  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email };

    const token = await this.jwtService.sign(payload);

    return token;
  }

  private async validateUser(target: AuthLoginDto) {
    const user = await this.userService.findByEmail(target.email);

    const isPassword = await bcrypt.compare(target.password, user.password);

    if (!user || !isPassword) {
      throw new UnauthorizedException(401, 'Неверный логин или пароль');
    }

    return user;
  }
}
