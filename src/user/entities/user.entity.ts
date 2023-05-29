import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User {
	@Prop({ required: true })
	fullname: string

	@Prop({ required: true })
	number: number

	@Prop({ required: true })
	passwordHash: string

	@Prop()
	age: number

	@Prop()
	city: string
}

export const UserSchema = SchemaFactory.createForClass(User)
