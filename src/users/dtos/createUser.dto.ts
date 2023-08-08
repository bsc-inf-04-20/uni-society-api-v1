import * as joi from "joi";
import { IsEmail } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export const createUserSchema=joi.object({
    username: joi.string().required(),
    name:joi.string().required(),
    sex:joi.string().required(),
    birthday:joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    yearOfStudy: joi.number().required()
  });



export class createUserDto{

  @ApiProperty({
    type:String,
    description:'A string is required'
  })
    username: string;

    @ApiProperty({
      type:String,
      description:'A string is required'
    })
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
    birthday: string;

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
      description:'A Number is required'
    })
    yearOfStudy: number;
}