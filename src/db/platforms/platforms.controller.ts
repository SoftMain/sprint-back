import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { Platform } from './platforms.model';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private platformService: PlatformsService) {}

  @ApiOperation({ summary: 'Добавление платформы'})
  @ApiResponse({ status: 200, type: Platform })
  @Post()
  create(@Body() dto: CreatePlatformDto) {
    return this.platformService.createPlatform(dto);
  }

  @ApiOperation({ summary: 'Получить все платформы'})
  @ApiResponse({ status: 200, type: [Platform] })
  @Get()
  getAll() {
    return this.platformService.getAllPlatforms();
  }
}
