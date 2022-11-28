import { ApiProperty } from "@nestjs/swagger";

export class CreateProductMediaDto {
  @ApiProperty({ example: "Файл", description: "Ссылка или название файла" })
  readonly file: string;
  @ApiProperty({ example: "Тип", description: "Видео или скриншот" })
  readonly type: string;
}