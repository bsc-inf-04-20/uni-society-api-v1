import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createRequestDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()
    society_name: string;
}