import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Moment } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMoments(): Array<Moment> {
    return this.appService.getMoments();
  }
}
