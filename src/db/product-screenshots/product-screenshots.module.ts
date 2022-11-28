import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductScreenshotsController } from './product-screenshots.controller';
import { ProductScreenshot } from './product-screenshots.model';
import { ProductScreenshotsService } from './product-screenshots.service';

@Module({
  controllers: [ProductScreenshotsController],
  providers: [ProductScreenshotsService],
  imports: [
    SequelizeModule.forFeature([ProductScreenshot])
  ]
})
export class ProductScreenshotsModule {}
