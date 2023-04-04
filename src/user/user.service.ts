import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): number {
    return 123456789
  }
}
