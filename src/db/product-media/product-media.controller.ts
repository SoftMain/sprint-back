import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductMediaDto } from './dto/create-product-media.dto';
import { ProductMedia } from './product-media.model';
import { ProductMediaService } from './product-media.service';

@ApiTags('Медиа')
@Controller('product-media')
export class ProductMediaController {

  constructor (private productMediaService: ProductMediaService) {}

  @ApiOperation({ summary: 'Добавить скриншот для продукта'})
  @ApiResponse({ status: 200, type: ProductMedia })
  @Post()
  create(@Body() dto: CreateProductMediaDto) {
    return this.productMediaService.createProductMedia(dto);
  }
}
