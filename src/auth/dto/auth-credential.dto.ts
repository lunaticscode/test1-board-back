import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";
const MATCHES_ERROR_MESSAGE = "password only accepts english and number";
export class AuthCredentialDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: MATCHES_ERROR_MESSAGE,
    })
    password: string;
}