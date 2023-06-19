import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../class/users/users';
import { UsersRepository } from '../../class/users/users.repository';


@Injectable()
export class UserServicesService {
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

//   findOne(id: number): Promise<User | null> {
//     return this.usersRepository.findOneBy({ id });
//   }

  // Other methods for interacting with the database...
}