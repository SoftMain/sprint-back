import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';

interface ProductScreenshotsCreationAttrs {
  file: string;
}

@Table({ tableName: 'product_screenshots' })
export class ProductScreenshot extends Model<ProductScreenshot, ProductScreenshotsCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @ApiProperty({ example: 'Файл', description: 'Ссылка или название файла' })
  @Column({ type: DataType.STRING, allowNull: false })
  file: string;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}
