import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Vous êtes connectés sur la Thot API.';
  }
}
