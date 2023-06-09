import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class createPostDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    details:string;

    @ApiProperty({
        type:Array,
        description:'A string array is required'
      })
    @IsArray()
    audienceSocieties:string[];
}