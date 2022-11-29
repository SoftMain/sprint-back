import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { ProductFeatures } from './product-features.model';

interface FeaturesCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'features' })
export class Feature extends Model<Feature, FeaturesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Особенность', description: 'Наименование особенности' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Описание', description: 'Описание особенности' })
  @Column( {type: DataType.STRING, allowNull: true })
  description: string;

  @BelongsToMany(() => Product, () => ProductFeatures)
  products: Product[];
}
