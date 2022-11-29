import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../products/products.model';
import { CertificatesController } from './certificates.controller';
import { Certificate } from './certificates.model';
import { CertificatesService } from './certificates.service';
import { ProductCertificates } from './product-certificates.model';

@Module({
  controllers: [CertificatesController],
  providers: [CertificatesService],
  imports: [
    SequelizeModule.forFeature([Certificate, Product, ProductCertificates])
  ],
})
export class CertificatesModule {}
