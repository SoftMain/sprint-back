import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Добавление продукта'})
  @ApiResponse({ status: 200, type: Product })
  @Post()
  create(@Body() productDto: CreateProductDto) {
    return this.productsService.createProduct(productDto);
  }

  @ApiOperation({ summary: 'Получить все продукты'})
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productsService.getAllProducts();
  }
}
