import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { Certificate } from './certificates.model';


@Table({ tableName: 'product_certificates', createdAt: false, updatedAt: false })
export class ProductCertificates extends Model<ProductCertificates> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  product_id: number;

  @ForeignKey(() => Certificate)
  @Column( {type: DataType.INTEGER })
  certificate_id: number;
}
