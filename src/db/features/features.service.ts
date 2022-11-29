import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { Feature } from './features.model';

@Injectable()
export class FeaturesService {
    constructor(@InjectModel(Feature) private featureRepository: typeof Feature) {}
  
    async createFeature(dto: CreateFeatureDto) {
      const feature = await this.featureRepository.create(dto);
      return feature;
    }
  
    async getAllFeatures() {
      const features = await this.featureRepository.findAll();
      return features;
    }
  
    async getFeatureByName(value: string) {
      const feature = await this.featureRepository.findOne({ where: { name: value} })
      return feature;
    }
}
