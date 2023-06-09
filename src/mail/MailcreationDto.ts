import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsArray, IsString } from "class-validator";

export class MailCreationDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()     
    message:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()    
    subject:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()  
    replyTo:string;

    @ApiProperty({
        type:String,
        description:'A string array is required'
      })
    @IsArray()
    cc:string []
    }