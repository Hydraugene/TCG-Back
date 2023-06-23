import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../class/users/users';
import { UsersRepository } from '../../class/users/users.repository';


@Injectable()
export class UserServicesService {
  private Users : User[] = [{id:0, username:'Thomas', password:'motdepasse'},{id:1, username:'Chouk', password:'motdepasse'}]
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    //(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>)
    //@InjectRepository(User)
    //private readonly usersRepo: Repository<User>s

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async connexion(id : string, pw : string) : Promise<User> {
    // (await this.usersRepository.find()).filter(item => item.username == id && item.password == pw)
    
    // this?this.usersRepository.findOne(id, pw);

    //tmp pour démo sans BDD
    return this.Users.find(item => item.username == id && item.password == pw)
  }

//   findOne(id: number): Promise<User | null> {
//     return this.usersRepository.findOneBy({ id });
//   }

  // Other methods for interacting with the database...
}