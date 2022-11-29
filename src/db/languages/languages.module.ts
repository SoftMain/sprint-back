import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { LanguagesController } from './languages.controller';
import { Language } from './languages.model';
import { LanguagesService } from './languages.service';
import { ProductLanguages } from './product-languages.model';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService],
  imports: [
    SequelizeModule.forFeature([Language, Product, ProductLanguages])
  ],
})
export class LanguagesModule {}
