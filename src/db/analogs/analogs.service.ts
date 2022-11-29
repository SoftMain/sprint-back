import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Analog } from './analogs.model';
import { CreateAnalogDto } from './dto/create-analogs.dto';

@Injectable()
export class AnalogsService {
  constructor(@InjectModel(Analog) private analogRepository: typeof Analog) {}

  async createAnalog(dto: CreateAnalogDto) {
    const analog = await this.analogRepository.create(dto);
    return analog;
  }

  async getAllAnalogs() {
    const analog = await this.analogRepository.findAll();
    return analog;
  }

  async getAnalogByName(value: string) {
    const analog = await this.analogRepository.findOne({ where: { name: value} })
    return analog;
  }
}
