/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Book } from "@prisma/client";

export class BookEntity implements Book {
    @ApiProperty()
    bookId: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    userId: number;
    
}
