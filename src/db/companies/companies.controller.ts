import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('Компании')
@Controller('companies')
export class CompaniesController {

  constructor(private companyService: CompaniesService) {}

  @ApiOperation({ summary: 'Добавление компании'})
  @ApiResponse({ status: 200, type: Company })
  @Post()
  create(@Body() dto: CreateCompanyDto) {
    return this.companyService.createCompany(dto);
  }

  @ApiOperation({ summary: 'Получить все компании'})
  @ApiResponse({ status: 200, type: [Company] })
  @Get()
  getAll() {
    return this.companyService.getAllCompanies();
  }
}
