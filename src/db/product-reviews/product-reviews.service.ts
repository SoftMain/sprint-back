import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductReviewDto } from './dto/create-product-reviews.dto';
import { ProductReview } from './product-reviews.model';

@Injectable()
export class ProductReviewsService {
  constructor(@InjectModel(ProductReview) private productReviewRepository: typeof ProductReview) {}

  async createProductReview(dto: CreateProductReviewDto) {
    const productReview = await this.productReviewRepository.create(dto);
    return productReview;
  }
}
