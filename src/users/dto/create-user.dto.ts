/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength, IsEmail, Matches } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsEmail()
    email:string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])$')
    @ApiProperty()
    password:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    roleName:string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    status:string;
}
