import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./db/products/products.model";
import { ProductsModule } from './db/products/products.module';
import { CompaniesModule } from './db/companies/companies.module';
import { Company } from "./db/companies/companies.model";
import { ProductScreenshotsModule } from './db/product-screenshots/product-screenshots.module';
import { ProductScreenshot } from "./db/product-screenshots/product-screenshots.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Product, Company, ProductScreenshot],
      autoLoadModels: true
    }),
    ProductsModule,
    CompaniesModule,
    ProductScreenshotsModule,
  ],
})
export class AppModule {}