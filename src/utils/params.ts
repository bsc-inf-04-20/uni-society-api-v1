//user params

export type createUserParams={
    username:string,
    email:string,
    password:string,
    yearOfStudy:number
}

export type updateUserParams={
     username: string,
     email:string,
     password: string,
     yearOfStudy: number
}

//society params

export type createSocietyparams={
    society_name: string,
    focus : string,
    society_description:string
}