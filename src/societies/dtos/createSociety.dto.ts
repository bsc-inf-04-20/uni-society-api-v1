import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createSocietyDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()
    society_name: string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()
    focus : string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()  
    society_description:string;
}