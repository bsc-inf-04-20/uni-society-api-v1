import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class updateUserDto{

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()
    username: string;

    @ApiProperty({
      type:String,
      description:'A string is required'
    })
    @IsString()
    name:string

    @ApiProperty({
      type:String,
      description:'A string is required'
    })
    sex:string;

    @ApiProperty({
      type:String,
      description:'A string is required'
    })
    birthday:string;



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
    @IsString()
    password: string;

    @ApiProperty({
        type:Number,
        description:'A number is required'
      })
    @IsNumber()
    yearOfStudy: number;

}