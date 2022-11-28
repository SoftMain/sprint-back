import { ApiProperty } from "@nestjs/swagger";

export class CreateProductReviewDto {
  @ApiProperty({ example: "Автор", description: "Имя Автора" })
  readonly author: string;
  @ApiProperty({ example: "Почта", description: "Почта автора" })
  readonly email: string;
  @ApiProperty({ example: "Комментарий", description: "Комментарий к продукту" })
  readonly content: string;
  @ApiProperty({ example: "ИД продукта", description: "ИД продукта" })
  readonly product_id: number;
  @ApiProperty({ example: "Рейтинг", description: "Рейтинг продукта" })
  readonly rating: number;
}