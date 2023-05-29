import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './entities/user.entity'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

	async create(createUserDto: CreateUserDto) {
		const createdUser = await this.UserModel.create(createUserDto)
		return createdUser
	}

	async findAll() {
		const users = await this.UserModel.find()
		return users
	}

	async findOne(id: string) {
		const foundUser = await this.UserModel.findById({ _id: id })
		return foundUser
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		const updatedUser = await this.UserModel.updateOne(
			{ _id: id },
			updateUserDto,
		)
		return updatedUser
	}

	async remove(id: string) {
		const res = await this.UserModel.deleteOne({ _id: id })
		return res
	}
}
