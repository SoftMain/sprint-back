import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductScreenshotDto } from './dto/create-product-screenshot.dto';
import { ProductScreenshot } from './product-screenshots.model';
import { ProductScreenshotsService } from './product-screenshots.service';

@ApiTags('Скриншоты')
@Controller('product-screenshots')
export class ProductScreenshotsController {

  constructor (private productScreenshotService: ProductScreenshotsService) {}

  @ApiOperation({ summary: 'Добавить скриншот для продукта'})
  @ApiResponse({ status: 200, type: ProductScreenshot })
  @Post()
  create(@Body() dto: CreateProductScreenshotDto) {
    return this.productScreenshotService.createProductScreenshot(dto);
  }

}
