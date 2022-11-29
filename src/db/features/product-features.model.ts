import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Feature } from './features.model';


@Table({ tableName: 'product_features', createdAt: false, updatedAt: false })
export class ProductFeatures extends Model<ProductFeatures> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  product_id: number;

  @ForeignKey(() => Feature)
  @Column( {type: DataType.INTEGER })
  feature_id: number;
}
