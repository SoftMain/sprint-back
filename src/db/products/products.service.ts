import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Op } from "sequelize";
import { Analog } from "../analogs/analogs.model";
import { CategoriesService } from "../categories/categories.service";
import { Certificate } from "../certificates/certificates.model";
import { Company } from "../companies/companies.model";
import { Language } from "../languages/languages.model";
import { Platform } from "../platforms/platforms.model";
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
      offset:
        Number(query._page) === 1
          ? 0
          : (Number(query._page) - 1) * Number(query._limit),
    });
    return products;
  }
  async getFilteredProducts(query) {
    const products = await this.productRepository.findAndCountAll({
      include: [
        { model: Company },
        { model: ProductReview },
        {
          model: Analog,
          where: {
            id: {
              [Op.or]: query._selected?.analogs ? query._selected.analogs : [],
            },
          },
          required: false
        },
        {
          model: Certificate,
          where: {
            id: {
              [Op.or]: query._selected?.certificates ? query._selected.certificates : [],
            },
          },
          required: false
        },
        {
          model: Platform,
          where: {
            id: {
              [Op.or]: query._selected?.platforms ? query._selected.platforms : [],
            },
          },
          required: false
        },
        {
          model: Language,
          where: {
            id: {
              [Op.or]: query._selected?.languages ? query._selected.languages : [],
            },
          },
          required: false
        },
      ],
      limit: query._limit,
      offset:
        Number(query._page) === 1
          ? 0
          : (Number(query._page) - 1) * Number(query._limit),
    });
    return products;
  }
}
