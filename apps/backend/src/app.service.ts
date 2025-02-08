import { Injectable } from '@nestjs/common';
import { Moment } from './types';

@Injectable()
export class AppService {
  getMoments(): Array<Moment> {
    return [
      {
        id: '1',
        timestamp: Date.now(),
        message: 'Hello, world!',
      },
      {
        id: '2',
        timestamp: Date.now(),
        message: 'Goodbye, world!',
      },
      {
        id: '3',
        timestamp: Date.now(),
        message: 'Hello, again!',
      },
    ];
  }
}
