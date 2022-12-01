import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CategoriesService } from "../categories/categories.service";
import { Company } from "../companies/companies.model";
import { ProductReview } from "../product-reviews/product-reviews.model";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private categoryService: CategoriesService
  ) {}

  async createProduct(dto: CreateProductDto) {
    const product = await this.productRepository.create(dto);
    return product;
  }

  async getAllProducts(query) {
    const products = await this.productRepository.findAndCountAll({
      include: [{ model: Company }, { model: ProductReview }],
      limit: query._limit,
      offset: Number(query._page) === 1 ? 0 : (Number(query._page) - 1) * Number(query._limit),
    });
    return products;
  }
}
