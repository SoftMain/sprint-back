import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductAnalogs } from '../analogs/product-analogs.model';
import { Category } from '../categories/categories.model';
import { CategoriesModule } from '../categories/categories.module';
import { ProductCategories } from '../categories/product-categories.model';
import { ProductsController } from './products.controller';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    SequelizeModule.forFeature([Product, Category, ProductCategories, ProductAnalogs]),
    CategoriesModule
  ]
})
export class ProductsModule {}
