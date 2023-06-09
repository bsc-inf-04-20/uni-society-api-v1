import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class createEventDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()  
    event_name: string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()  
    event_description:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    @IsString()   
    event_location:string;

    @ApiProperty({
        type:Date,
        description:'A Date is required'
      })
    @IsDateString()  
    event_date:Date;
}