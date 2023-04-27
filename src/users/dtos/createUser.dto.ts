import * as joi from "joi";

export const createUserSchema=joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    yearOfStudy: joi.number().required()
  });



export class createUserDto{
    username: string;
    password: string;
    yearOfStudy: number;
}