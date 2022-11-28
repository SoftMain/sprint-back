import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductMediaDto } from './dto/create-product-media.dto';
import { ProductMedia } from './product-media.model';

@Injectable()
export class ProductMediaService {
  constructor (@InjectModel(ProductMedia) private productMediaRepository: typeof ProductMedia) {}

  async createProductMedia(dto: CreateProductMediaDto) {
    const productMedia = await this.productMediaRepository.create(dto);
    return productMedia;
  }
}
