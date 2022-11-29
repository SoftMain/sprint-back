import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Certificate } from './certificates.model';
import { CreateCertificateDto } from './dto/create-certificates.dto';

@Injectable()
export class CertificatesService {
  constructor(@InjectModel(Certificate) private certificateRepository: typeof Certificate) {}

  async createCertificate(dto: CreateCertificateDto) {
    const certificate = await this.certificateRepository.create(dto);
    return certificate;
  }

  async getAllCertificates() {
    const certificates = await this.certificateRepository.findAll();
    return certificates;
  }

  async getCertificateByName(value: string) {
    const certificate = await this.certificateRepository.findOne({ where: { name: value} })
    return certificate;
  }
}
