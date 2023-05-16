import { ApiProperty } from "@nestjs/swagger";

export class createPostDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    details:string;

    @ApiProperty({
        type:String,
        description:'A string array is required'
      })
    audienceSocieties:string[];
}