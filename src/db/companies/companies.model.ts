import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';

interface CompaniesCreationAttrs {
  name: string;
}

@Table({ tableName: 'companies' })
export class Company extends Model<Company, CompaniesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @ApiProperty({ example: 'Компания', description: 'Наименование комании' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Описание компании', description: 'Описание компании' })
  @Column( {type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: 'Офф. сайт', description: 'Оффициальный сайт' })
  @Column( {type: DataType.STRING, allowNull: true })
  url: string;

  @ApiProperty({ example: 'Подтверждение', description: 'Подтверждение компании' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  verity: boolean;

  @HasMany(() => Product)
  products: Product[];
}
