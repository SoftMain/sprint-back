import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
  @ApiProperty({ example: "Язык", description: "Название языка" })
  readonly name: string;
}