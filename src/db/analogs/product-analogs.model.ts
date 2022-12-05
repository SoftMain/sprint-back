import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Analog } from './analogs.model';

@Table({ tableName: 'product_analogs', createdAt: false, updatedAt: false })
export class ProductAnalogs extends Model<ProductAnalogs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  product_id: number;

  @ForeignKey(() => Analog)
  @Column({ type: DataType.INTEGER })
  analog_id: number;
}
