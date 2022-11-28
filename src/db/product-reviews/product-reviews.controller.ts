import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductReviewDto } from './dto/create-product-reviews.dto';
import { ProductReview } from './product-reviews.model';
import { ProductReviewsService } from './product-reviews.service';

@ApiTags('Отзывы')
@Controller('product-reviews')
export class ProductReviewsController {
  constructor (private productReviewService: ProductReviewsService) {}

  @ApiOperation({ summary: 'Добавить отзыв на продукт'})
  @ApiResponse({ status: 200, type: ProductReview })
  @Post()
  create(@Body() dto: CreateProductReviewDto) {
    return this.productReviewService.createProductReview(dto);
  }
}
