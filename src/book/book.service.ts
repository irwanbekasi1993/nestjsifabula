/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma:PrismaService){}
  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({data:createBookDto});
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(bookId: number) {
    return this.prisma.book.findUnique({where:{bookId}});
  }

  update(bookId: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({where:{bookId},data:updateBookDto});
  }

  remove(bookId: number) {
    return this.prisma.book.delete({where:{bookId}});
  }
}
