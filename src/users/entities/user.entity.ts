/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

/* eslint-disable prettier/prettier */
export class UserEntity implements User {
    @ApiProperty()
    userId: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    password: string;
    @ApiProperty()
    createdDate: Date;
    @ApiProperty()
    updatedDate: Date;
    @ApiProperty()
    roleName: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    borrowDate: Date;
    @ApiProperty()
    returnDate: Date;

}
