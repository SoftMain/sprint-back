import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "Категория", description: "Название категории" })
  readonly name: string;
  @ApiProperty({ example: "Описание", description: "Описание категории" })
  description: string;
  @ApiProperty({ example: "Иконка", description: "Иконка категории" })
  icon: string;
}