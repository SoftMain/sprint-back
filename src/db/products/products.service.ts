import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productRepository: typeof Product) {}

  async createProduct(dto: CreateProductDto) {
    const product = await this.productRepository.create(dto);
    return product;
  }

  async getAllProducts() {
    const products = await this.productRepository.findAll({ include: { all: true }});
    return products;
  }
}
