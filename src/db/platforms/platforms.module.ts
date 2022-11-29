import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { PlatformsController } from './platforms.controller';
import { Platform } from './platforms.model';
import { PlatformsService } from './platforms.service';
import { ProductPlatforms } from './product-platforms.model';

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService],
  imports: [
    SequelizeModule.forFeature([Platform, Product, ProductPlatforms])
  ],
})
export class PlatformsModule {}
