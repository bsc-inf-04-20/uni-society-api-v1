import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class updateUserDto{

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    username: string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsEmail()
    email: string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    password: string;

    @ApiProperty({
        type:Number,
        description:'A number is required'
      })
    yearOfStudy: number;

}