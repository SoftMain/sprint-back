import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Certificate } from './certificates.model';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificates.dto';

@ApiTags('Сертификации')
@Controller('certificates')
export class CertificatesController {
  constructor(private certificateService: CertificatesService) {}

  @ApiOperation({ summary: 'Добавление категории'})
  @ApiResponse({ status: 200, type: Certificate })
  @Post()
  create(@Body() dto: CreateCertificateDto) {
    return this.certificateService.createCertificate(dto);
  }

  @ApiOperation({ summary: 'Получить все категории'})
  @ApiResponse({ status: 200, type: [Certificate] })
  @Get()
  getAll() {
    return this.certificateService.getAllCertificates();
  }
}
