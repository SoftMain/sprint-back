import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { ProductAnalogs } from './product-analogs.model';

interface AnalogsCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'analog' })
export class Analog extends Model<Analog, AnalogsCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Аналог', description: 'Наименование аналога' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Описание', description: 'Описание аналога' })
  @Column( {type: DataType.STRING, allowNull: true })
  description: string;

  @BelongsToMany(() => Product, () => ProductAnalogs)
  products: Product[];
}
