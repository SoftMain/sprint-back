import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ example: "Продукт", description: "Наименование" })
  readonly name: string;
  @ApiProperty({ example: "Описание", description: "Описание" })
  readonly description: string;
}
