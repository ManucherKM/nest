import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostDto } from './post.dto.ts/post.dto.ts';

@Controller('post')
export class PostController {
  items: any[];

  constructor() {
    this.items = [
      {
        id: '1',
        text: `${Math.random()}`,
      },
      {
        id: '2',
        text: `${Math.random()}`,
      },
    ];
  }

  @Get()
  async getPosts() {
    return this.items;
  }

  @Post()
  async create(@Body() dto: PostDto) {
    return (this.items = [...this.items, dto]);
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return this.items.find((p) => p.id === id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.items = this.items.filter((p) => p.id !== id);
    return this.items;
  }

  @Put()
  async update(@Body() dto: PostDto) {
    const idx = this.items.find((p) => p.id === dto.id);
    idx.text = dto.text;
    return idx;
  }
}
