import { ApiProperty } from "@nestjs/swagger";

export class CreateAnalogDto {
  @ApiProperty({ example: "Аналог", description: "Название аналога" })
  readonly name: string;
  @ApiProperty({ example: "Описание", description: "Описание аналога" })
  description: string;
}
