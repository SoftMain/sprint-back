import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
  async getAll(@Query() query) {
    return this.productsService.getAllProducts(query);
  }

  @ApiOperation({ summary: 'Получить отфильтрованные все продукты'})
  @ApiResponse({ status: 200, type: [Product] })
  @Get('filtered')
  async getFilteredAll(@Query() query) {
    return this.productsService.getFilteredProducts(query);
  }

  @ApiOperation({ summary: 'Получить продукт по id'})
  @ApiResponse({ status: 200, type: [Product] })
  @Get(':id')
  async getProductById(@Param() params) {
    return this.productsService.getProductById(params);
  }
}
