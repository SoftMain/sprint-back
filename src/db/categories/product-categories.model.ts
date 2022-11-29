import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Category } from './categories.model';


@Table({ tableName: 'product_categories', createdAt: false, updatedAt: false })
export class ProductCategories extends Model<ProductCategories> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  product_id: number;

  @ForeignKey(() => Category)
  @Column( {type: DataType.INTEGER })
  category_id: number;
}
