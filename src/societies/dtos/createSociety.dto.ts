import { ApiProperty } from "@nestjs/swagger";

export class createSocietyDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    society_name: string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    focus : string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    society_description:string;
}