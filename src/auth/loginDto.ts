import { ApiProperty } from "@nestjs/swagger";

export class loginDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    email:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    password:string;
}