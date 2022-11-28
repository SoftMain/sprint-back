import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductMediaController } from './product-media.controller';
import { ProductMedia } from './product-media.model';
import { ProductMediaService } from './product-media.service';

@Module({
  controllers: [ProductMediaController],
  providers: [ProductMediaService],
  imports: [
    SequelizeModule.forFeature([ProductMedia])
  ]
})
export class ProductMediaModule {}
