import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Product } from '../products/products.model';
import { ProductCertificates } from './product-certificates.model';

interface CertificatesCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'certificates' })
export class Certificate extends Model<Certificate, CertificatesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Название сертификации', description: 'Наименование сертификации' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Описание', description: 'Описание сертификации' })
  @Column( {type: DataType.STRING, allowNull: true })
  description: string;

  @BelongsToMany(() => Product, () => ProductCertificates)
  products: Product[];
}
