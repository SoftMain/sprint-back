import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Platform } from './platforms.model';


@Table({ tableName: 'product_platforms', createdAt: false, updatedAt: false })
export class ProductPlatforms extends Model<ProductPlatforms> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  product_id: number;

  @ForeignKey(() => Platform)
  @Column( {type: DataType.INTEGER })
  platform_id: number;
}
