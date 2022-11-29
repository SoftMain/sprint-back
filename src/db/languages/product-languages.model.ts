import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Language } from './languages.model';


@Table({ tableName: 'product_languages', createdAt: false, updatedAt: false })
export class ProductLanguages extends Model<ProductLanguages> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  product_id: number;

  @ForeignKey(() => Language)
  @Column( {type: DataType.INTEGER })
  language_id: number;
}
