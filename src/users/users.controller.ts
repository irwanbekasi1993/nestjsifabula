/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    type:UserEntity
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({
    type:UserEntity,isArray:true
  })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({
    type:UserEntity
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  findOne(@Param('userId',ParseIntPipe) userId: number) {
    return this.usersService.findOne(+userId);
  }

  @ApiCreatedResponse({
    type:UserEntity
  })
  @ApiBearerAuth()
  @Patch(':userId')
  update(@Param('userId',ParseIntPipe) userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+userId, updateUserDto);
  }

  @ApiOkResponse({
    type:UserEntity
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':userId')
  remove(@Param('userId',ParseIntPipe) userId: number) {
    return this.usersService.remove(+userId);
  }

  @ApiOkResponse({
    type:UserEntity
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('updateBorrowingStatus/:userId')
  updateBorrowingStatus(@Param('userId',ParseIntPipe) userId: number){
    return this.usersService.updateBorrowingStatus(userId);
  }

  @ApiOkResponse({
    type:UserEntity
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('updateReturningStatus/:userId')
  updateReturningStatus(@Param('userId',ParseIntPipe) userId:number){
    return this.usersService.updateReturningStatus(userId);
  }
}
