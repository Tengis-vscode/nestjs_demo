import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AppValidator } from './app.validator';

@Controller('number')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getNumber')
  getHello(): number {
    return this.appService.getNumber();
  }

  @Post('setNumber')
  setNumber(@Req() request: Request): any {
    console.log('changes')
    return this.appService.setNumber(request.body);
  }
  @Post('addNumber')
  addNumber(@Body() body: AppValidator): number {
    return this.appService.addNumber(body);
  }
}
