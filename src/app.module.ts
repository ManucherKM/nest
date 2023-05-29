import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
	imports: [
		ConfigModule.forRoot(),
		UserModule,
		MongooseModule.forRoot(process.env.URL_DB),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
