import { ApiProperty } from "@nestjs/swagger";

export class createCommentDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    content:string;
}