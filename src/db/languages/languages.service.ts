import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from './languages.model';

@Injectable()
export class LanguagesService {
  constructor(@InjectModel(Language) private languageRepository: typeof Language) {}
  
    async createLanguage(dto: CreateLanguageDto) {
      const language = await this.languageRepository.create(dto);
      return language;
    }
  
    async getAllLanguages() {
      const languages = await this.languageRepository.findAll();
      return languages;
    }
  
    async getLanguageByName(value: string) {
      const language = await this.languageRepository.findOne({ where: { name: value} })
      return language;
    }
}
