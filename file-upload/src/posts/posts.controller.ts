import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import {FilesInterceptor} from "@nestjs/platform-express";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('file'))
  create(
      @UploadedFile() file: Express.Multer.File,
      @Body() createPostDto: CreatePostDto,

  ) {
    console.log("file uploaded",file);
    console.log("body along with the file", createPostDto);
    return this.postsService.create(createPostDto);
  }


}
