import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { CategoriesController } from './categories.controller';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { ProductCategories } from './product-categories.model';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Category, Product, ProductCategories])
  ],
  exports: [
    CategoriesService
  ]
})
export class CategoriesModule {}
