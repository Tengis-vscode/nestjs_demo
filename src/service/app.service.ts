import { Injectable } from '@nestjs/common';
import { AppCreateListDto, AppGetListDto, AppUpdateListDto } from '../validator/app.validator';
import AppRepository from '../repository/app.repository';

@Injectable()
export class AppService {
  appRepository: AppRepository;
  constructor(appRepository: AppRepository) {
    this.appRepository = appRepository;
  }

  getList = async (body: AppGetListDto) => {
    return await this.appRepository.find(body.where, body.options);
  }

  createList = async (body: AppCreateListDto) => {
    return await this.appRepository.create(body);
  }

  updateList = async (body: AppUpdateListDto) => {
    return await this.appRepository.update(body.id, body);
  }
}
