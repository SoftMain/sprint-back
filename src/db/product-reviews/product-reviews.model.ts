import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';

interface ProductReviewCreationAttrs {
  author: string;
  email: string;
  content: string;
  product_id: number;
}

@Table({ tableName: 'product_reviews' })
export class ProductReview extends Model<ProductReview, ProductReviewCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @ApiProperty({ example: 'Автор', description: 'Имя Автора' })
  @Column({ type: DataType.STRING, allowNull: false })
  author: string;

  @ApiProperty({ example: 'Почта', description: 'Почта автора' })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({ example: 'Комментарий', description: 'Комментарий на продукт' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: 'Рейтинг', description: 'Рейтинг продукта' })
  @Column({ type: DataType.STRING, allowNull: false })
  rating: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}
