import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from './languages.model';
import { LanguagesService } from './languages.service';

@ApiTags('Языки')
@Controller('languages')
export class LanguagesController {
  constructor(private languageService: LanguagesService) {}

  @ApiOperation({ summary: 'Добавление языка'})
  @ApiResponse({ status: 200, type: Language })
  @Post()
  create(@Body() dto: CreateLanguageDto) {
    return this.languageService.createLanguage(dto);
  }

  @ApiOperation({ summary: 'Получить все языки'})
  @ApiResponse({ status: 200, type: [Language] })
  @Get()
  getAll() {
    return this.languageService.getAllLanguages();
  }
}
