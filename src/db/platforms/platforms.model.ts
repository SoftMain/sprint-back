import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { ProductPlatforms } from './product-platforms.model';

interface PlatformsCreationAttrs {
  name: string;
}

@Table({ tableName: 'platforms' })
export class Platform extends Model<Platform, PlatformsCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Платформа', description: 'Наименование платформы' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsToMany(() => Product, () => ProductPlatforms)
  products: Product[];
}
