
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserServicesService } from '../../services/user-services/user-services.service';
//import { UsersController } from './users.controller';
import { User } from './users';
import { AppController } from 'src/app.controller';
import { AppModule } from 'src/app.module';
import { AppService } from 'src/app.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AppModule)],
  providers: [UserServicesService, AppService],
  //controllers: [UsersController],
  controllers: [AppController],

  exports: [TypeOrmModule],
})
export class UsersModule {
  static forRoot(arg0: { expandVariables: boolean; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}