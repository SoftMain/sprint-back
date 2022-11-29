import { ApiProperty } from "@nestjs/swagger";

export class CreatePlatformDto {
  @ApiProperty({ example: "Платформа", description: "Название платформы" })
  readonly name: string;
}