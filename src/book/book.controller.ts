/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookEntity } from './entities/book.entity';

@Controller('book')
@ApiTags('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiCreatedResponse({
    type:BookEntity
  })
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @ApiOkResponse({
    type:BookEntity,isArray:true
  })
  
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @ApiOkResponse({
    type:BookEntity
  })
  @Get(':bookId')
  findOne(@Param('bookId',ParseIntPipe) bookId: number) {
    return this.bookService.findOne(+bookId);
  }

  @ApiCreatedResponse({
    type:BookEntity
  })
  @Patch(':bookId')
  update(@Param('bookId',ParseIntPipe) bookId: number, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+bookId, updateBookDto);
  }

  @ApiOkResponse({
    type:BookEntity
  })
  @Delete(':bookId')
  remove(@Param('bookId',ParseIntPipe) bookId:number) {
    return this.bookService.remove(+bookId);
  }
}
