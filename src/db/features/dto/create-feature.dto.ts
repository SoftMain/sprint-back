import { ApiProperty } from "@nestjs/swagger";

export class CreateFeatureDto {
  @ApiProperty({ example: "Особенность", description: "Название особенности" })
  readonly name: string;
  @ApiProperty({ example: "Описание особенности", description: "Описание особенности" })
  description: string;
}