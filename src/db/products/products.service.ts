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

  async getProductById(params) {
    console.log(params);
    const product = await this.productRepository.findByPk(params.id, { include: { all: true }});
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
    let filter = [];

    if (query._selected?.analogs) {
      filter.push({
        model: Analog,
        where: {
          id: {
            [Op.in]: query._selected.analogs,
          },
        },
      });
    }
    if (query._selected?.certificates) {
      filter.push({
        model: Certificate,
        where: {
          id: {
            [Op.in]: query._selected.certificates,
          },
        },
      });
    }
    if (query._selected?.platforms) {
      filter.push({
        model: Platform,
        where: {
          id: {
            [Op.in]: query._selected.platforms,
          },
        },
      });
    }
    if (query._selected?.languages) {
      filter.push({
        model: Language,
        where: {
          id: {
            [Op.in]: query._selected.languages,
          },
        },
      });
    }

    filter.push({ model: Company });
    filter.push({ model: ProductReview });
    
    const products = await this.productRepository.findAndCountAll({
      include: filter,
      limit: query._limit,
      offset:
        Number(query._page) === 1
          ? 0
          : (Number(query._page) - 1) * Number(query._limit),
    });
    return products;
  }
}
