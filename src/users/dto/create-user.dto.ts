import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";
export class CreateUserDto {
  @ApiProperty({ example: "user@gmai.com", description: "Email" })
  @IsString({ message: "Must be a string" })
  @IsEmail({}, { message: "Wrong Email" })
  readonly email: string;
  @IsString({ message: "Must be a string" })
  @Length(4, 16, { message: "From 4 to 16 characters" })
  @ApiProperty({ example: "123fgh456", description: "Password" })
  readonly password: string;
}
