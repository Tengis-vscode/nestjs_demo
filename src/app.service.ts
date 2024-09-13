import { Injectable } from '@nestjs/common';
import { AppValidator } from './app.validator';

@Injectable()
export class AppService {
  number: number;
  constructor() {
    this.number = 5;
  }
  
  getNumber = () => {
    return this.number; 
  }

  setNumber = (body: any) => {
    this.number = Number(body.number);

    return "Successfully changed number into " + this.getNumber();
  }
  addNumber = (body: AppValidator) => {
    return Number(body.number1) + Number(body.number2);
  }
}
