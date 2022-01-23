import { ValueProvider } from "@nestjs/common";

export class CreateRoleDto {
  readonly value: string;
  readonly description: string;
}
