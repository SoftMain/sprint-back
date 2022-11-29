import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { ProductLanguages } from './product-languages.model';

interface LanguagesCreationAttrs {
  name: string;
}

@Table({ tableName: 'languages' })
export class Language extends Model<Language, LanguagesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Язык', description: 'Наименование языка' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Product, () => ProductLanguages)
  products: Product[];
}
