/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    status: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    userId: number;
}
