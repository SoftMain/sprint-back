import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';

interface ProductMediaCreationAttrs {
  file: string;
  type: string;
}

@Table({ tableName: 'product_media' })
export class ProductMedia extends Model<ProductMedia, ProductMediaCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @ApiProperty({ example: 'Файл', description: 'Ссылка или название файла' })
  @Column({ type: DataType.STRING, allowNull: false })
  file: string;

  @ApiProperty({ example: 'Тип', description: 'Тип файла, видео или скриншот' })
  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false })
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}
