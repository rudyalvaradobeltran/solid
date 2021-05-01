import { User } from './User';

export interface UserRepository {
    getUser(id: number): User;
}