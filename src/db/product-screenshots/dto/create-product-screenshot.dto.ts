import { ApiProperty } from "@nestjs/swagger";

export class CreateProductScreenshotDto {
  @ApiProperty({ example: "Файл", description: "Ссылка или название файла" })
  readonly file: string;
}