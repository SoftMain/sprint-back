import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Analog } from './analogs.model';
import { AnalogsService } from './analogs.service';
import { CreateAnalogDto } from './dto/create-analogs.dto';

@ApiTags('Аналоги')
@Controller('analogs')
export class AnalogsController {
  constructor(private analogService: AnalogsService) {}

  @ApiOperation({ summary: 'Добавление аналога'})
  @ApiResponse({ status: 200, type: Analog })
  @Post()
  create(@Body() dto: CreateAnalogDto) {
    return this.analogService.createAnalog(dto);
  }

  @ApiOperation({ summary: 'Получить все аналоги'})
  @ApiResponse({ status: 200, type: [Analog] })
  @Get()
  getAll() {
    return this.analogService.getAllAnalogs();
  }
}
