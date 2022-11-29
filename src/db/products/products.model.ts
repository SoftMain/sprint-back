import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Analog } from '../analogs/analogs.model';
import { ProductAnalogs } from '../analogs/product-analogs.model';
import { Category } from '../categories/categories.model';
import { ProductCategories } from '../categories/product-categories.model';
import { Certificate } from '../certificates/certificates.model';
import { ProductCertificates } from '../certificates/product-certificates.model';
import { Company } from '../companies/companies.model';
import { Feature } from '../features/features.model';
import { ProductFeatures } from '../features/product-features.model';
import { Language } from '../languages/languages.model';
import { ProductLanguages } from '../languages/product-languages.model';
import { Platform } from '../platforms/platforms.model';
import { ProductPlatforms } from '../platforms/product-platforms.model';
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

  @BelongsToMany(() => Category, () => ProductCategories)
  categories: Category[];

  @BelongsToMany(() => Analog, () => ProductAnalogs)
  analogs: Analog[];

  @BelongsToMany(() => Certificate, () => ProductCertificates)
  certificates: Certificate[];

  @BelongsToMany(() => Feature, () => ProductFeatures)
  features: Feature[];

  @BelongsToMany(() => Language, () => ProductLanguages)
  languages: Language[];

  @BelongsToMany(() => Platform, () => ProductPlatforms)
  platforms: Language[];
}
