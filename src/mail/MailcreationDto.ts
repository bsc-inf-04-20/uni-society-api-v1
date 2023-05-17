import { ApiProperty } from "@nestjs/swagger";

export class MailCreationDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    message:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    subject:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    replyTo:string;

    @ApiProperty({
        type:String,
        description:'A string array is required'
      })
    cc:string []
    }