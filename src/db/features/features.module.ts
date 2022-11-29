import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { FeaturesController } from './features.controller';
import { Feature } from './features.model';
import { FeaturesService } from './features.service';
import { ProductFeatures } from './product-features.model';

@Module({
  controllers: [FeaturesController],
  providers: [FeaturesService],
  imports: [
    SequelizeModule.forFeature([Feature, Product, ProductFeatures])
  ],
})
export class FeaturesModule {}
