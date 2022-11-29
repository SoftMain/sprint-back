import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./db/products/products.model";
import { ProductsModule } from "./db/products/products.module";
import { CompaniesModule } from "./db/companies/companies.module";
import { Company } from "./db/companies/companies.model";
import { ProductMediaModule } from "./db/product-media/product-media.module";
import { ProductMedia } from "./db/product-media/product-media.model";
import { ProductReviewsModule } from "./db/product-reviews/product-reviews.module";
import { ProductReview } from "./db/product-reviews/product-reviews.model";
import { CategoriesModule } from "./db/categories/categories.module";
import { Category } from "./db/categories/categories.model";
import { ProductCategories } from "./db/categories/product-categories.model";
import { FeaturesModule } from "./db/features/features.module";
import { LanguagesModule } from "./db/languages/languages.module";
import { CertificatesModule } from "./db/certificates/certificates.module";
import { AnalogsModule } from "./db/analogs/analogs.module";
import { PlatformsModule } from "./db/platforms/platforms.module";
import { Analog } from "./db/analogs/analogs.model";
import { ProductAnalogs } from "./db/analogs/product-analogs.model";
import { ProductCertificates } from "./db/certificates/product-certificates.model";
import { Certificate } from "./db/certificates/certificates.model";
import { ProductFeatures } from "./db/features/product-features.model";
import { Feature } from "./db/features/features.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Product,
        Company,
        ProductMedia,
        ProductReview,
        Category,
        ProductCategories,
        Analog,
        ProductAnalogs,
        Certificate,
        ProductCertificates,
        Feature,
        ProductFeatures,
      ],
      autoLoadModels: true,
    }),
    ProductsModule,
    CompaniesModule,
    ProductMediaModule,
    ProductReviewsModule,
    CategoriesModule,
    FeaturesModule,
    LanguagesModule,
    CertificatesModule,
    AnalogsModule,
    PlatformsModule,
  ],
})
export class AppModule {}
