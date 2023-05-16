import { ApiProperty } from "@nestjs/swagger";

export class createEventDto{
    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    event_name: string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    event_description:string;

    @ApiProperty({
        type:String,
        description:'A string is required'
      })
    event_location:string;

    @ApiProperty({
        type:Date,
        description:'A Date is required'
      })
    event_date:Date;
}