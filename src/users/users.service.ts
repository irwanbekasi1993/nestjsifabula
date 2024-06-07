/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing=10;

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password,roundsOfHashing);
    createUserDto.password=hashedPassword;
    return this.prisma.user.create({data:createUserDto});
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(userId: number) {
    return this.prisma.user.findUnique({where:{userId}});
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    if(updateUserDto.password){
      updateUserDto.password=await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing
      );
    }
    
    return this.prisma.user.update({where:{userId},data:updateUserDto});
  }

  async remove(userId: number) {
    return this.prisma.user.delete({where:{userId}});
  }

  async updateBorrowingStatus(userId:number){
    return this.prisma.user.update({where:{userId,status:'borrowing'},data:{status:'borrowing',borrowDate:new Date(Date.now())}});
  }

  async updateReturningStatus(userId:number){
    return this.prisma.user.update({where:{userId,status:'borrowing'},data:{status:'returning',returnDate:new Date(Date.now())}})
  }
}


