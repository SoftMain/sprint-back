import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductScreenshotDto } from './dto/create-product-screenshot.dto';
import { ProductScreenshot } from './product-screenshots.model';

@Injectable()
export class ProductScreenshotsService {
  constructor (@InjectModel(ProductScreenshot) private productScreenshotRepository: typeof ProductScreenshot) {}

  async createProductScreenshot(dto: CreateProductScreenshotDto) {
    const productScreenshot = await this.productScreenshotRepository.create(dto);
    return productScreenshot;
  }

  
}
