import { ApiProperty } from "@nestjs/swagger";

export class createPatroneDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    society_name:string;
}