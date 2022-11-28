import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Company } from '../companies/companies.model';
import { ProductMedia } from '../product-media/product-media.model';
import { ProductReview } from '../product-reviews/product-reviews.model';

interface ProductCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @ApiProperty({ example: 'Продукт', description: 'Наименование продукта' })
  @Column( {type: DataType.STRING, unique: true, allowNull: false })
  name: string;
  
  @ApiProperty({ example: 'Описание продукта', description: 'Описание продукта' })
  @Column( {type: DataType.STRING, allowNull: true })
  description: string;
  
  @ApiProperty({ example: 'false', description: 'Имеет ли мобильное приложение' })
  @Column( {type: DataType.BOOLEAN, defaultValue: false })
  mobile: boolean;

  @ForeignKey(() => Company)
  @Column({ type: DataType.INTEGER, allowNull: false })
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;

  @HasMany(() => ProductMedia)
  product_media: ProductMedia[];

  @HasMany(() => ProductReview)
  product_reviews: ProductReview[];
}
