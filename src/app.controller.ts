import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserServicesService } from './services/user-services/user-services.service';

export class Connexion {
  readonly username: string;
  readonly password: string;
  // Add other properties as needed
}

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

  @Post('connect')
  async getConnexion(@Body() infosConnexion: Connexion){
    return this.userServices.connexion(infosConnexion.username, infosConnexion.password)
  }
  
}
