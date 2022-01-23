import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmai.com", description: "Email" })
  readonly email: string;
  @ApiProperty({ example: "123fgh456", description: "Password" })
  readonly password: string;
}
