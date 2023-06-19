import { EntityRepository, Repository } from 'typeorm';
import { User } from './users';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  // Custom repository methods and logic
}