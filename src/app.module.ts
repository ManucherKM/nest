import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { CommentsController } from './comments/comments.controller';
import { DbController } from './db/db.controller';
import { DbModule } from './db/db.module';

@Module({
  imports: [UserModule, DbModule],
  controllers: [AppController, UserController, PostController, CommentsController, DbController],
  providers: [AppService, PostService, UserService],
})
export class AppModule {}
