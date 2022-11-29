import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { Platform } from './platforms.model';

@Injectable()
export class PlatformsService {
  constructor(@InjectModel(Platform) private platformRepository: typeof Platform) {}
  
  async createPlatform(dto: CreatePlatformDto) {
    const platform = await this.platformRepository.create(dto);
    return platform;
  }

  async getAllPlatforms() {
    const platforms = await this.platformRepository.findAll();
    return platforms;
  }

  async getPlatformByName(value: string) {
    const platform = await this.platformRepository.findOne({ where: { name: value} })
    return platform;
  }
}

