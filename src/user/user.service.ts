import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const candidate = await this.userRepository.findOne({ where: { id } });

    if (!candidate) {
      return 'Такого пользователя не существует';
    }

    const user = await this.userRepository.findAll();

    return user;
  }

  async remove(id: number) {
    const candidate = await this.userRepository.findOne({ where: { id } });

    if (!candidate) {
      return 'Такого пользователя не существует';
    }

    const user = await this.userRepository.findAll();

    return user;
  }
}
