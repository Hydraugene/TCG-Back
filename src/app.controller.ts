import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserServicesService } from './services/user-services/user-services.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly userServices: UserServicesService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async getBDDTest(){
    return this.userServices.getUsers();
  }

  
}
