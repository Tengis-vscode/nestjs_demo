import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from 'src/service/app.service';
import { AppCreateListDto,  AppGetListDto,  AppUpdateListDto } from 'src/validator/app.validator';

@Controller('list')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('get')
  async getList(@Body() body: AppGetListDto): Promise<any> {
    console.log('req', body)
    return await this.appService.getList(body);
  }

  @Post('create')
  async createList(@Body() body: AppCreateListDto): Promise<any> {
    return await this.appService.createList(body);
  }

  @Post('update')
  async updateList(@Body() body: AppUpdateListDto): Promise<any> {
    return await this.appService.updateList(body);
  }
}
