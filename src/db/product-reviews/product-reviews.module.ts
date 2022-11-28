import { Module } from '@nestjs/common';
import { ProductReviewsService } from './product-reviews.service';
import { ProductReviewsController } from './product-reviews.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductReview } from './product-reviews.model';

@Module({
  providers: [ProductReviewsService],
  controllers: [ProductReviewsController],
  imports: [
    SequelizeModule.forFeature([ProductReview])
  ]
})
export class ProductReviewsModule {}
