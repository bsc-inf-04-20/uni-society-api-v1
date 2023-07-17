import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class loginDto{


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

}