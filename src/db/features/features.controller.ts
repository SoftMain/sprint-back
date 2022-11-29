import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { Feature } from './features.model';
import { FeaturesService } from './features.service';

@ApiTags('Особенности')
@Controller('features')
export class FeaturesController {
  constructor(private featureService: FeaturesService) {}

  @ApiOperation({ summary: 'Добавление особенности'})
  @ApiResponse({ status: 200, type: Feature })
  @Post()
  create(@Body() dto: CreateFeatureDto) {
    return this.featureService.createFeature(dto);
  }

  @ApiOperation({ summary: 'Получить все особенности'})
  @ApiResponse({ status: 200, type: [Feature] })
  @Get()
  getAll() {
    return this.featureService.getAllFeatures();
  }
}
