import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { AnalogsController } from './analogs.controller';
import { Analog } from './analogs.model';
import { AnalogsService } from './analogs.service';
import { ProductAnalogs } from './product-analogs.model';

@Module({
  controllers: [AnalogsController],
  providers: [AnalogsService],
  imports: [
    SequelizeModule.forFeature([Analog, Product, ProductAnalogs])
  ]
})
export class AnalogsModule {}
