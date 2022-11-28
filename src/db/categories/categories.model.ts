import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CategoriesCreationAttrs {
  name: string;
  description: string;
  icon: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoriesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Категория', description: 'Наименование категории' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Описание', description: 'Описание категории' })
  @Column( {type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: 'Иконка', description: 'Название иконки' })
  @Column( {type: DataType.STRING, allowNull: false })
  icon: string;
}
