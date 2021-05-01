import { LocalUserRepository } from './LocalUserRepository';
import { UserRepository } from './UserRepository';

export class UserFactory {
    static create(): UserRepository {
        return new LocalUserRepository();
    } 
}