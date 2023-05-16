import { ApiProperty } from "@nestjs/swagger";

export class createRequestDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    society_name: string;
}