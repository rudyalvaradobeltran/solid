import { UserRepository } from './UserRepository';
import { UserFactory } from './UserFactory';

export class UserManager {
    showUser(id: number): void {
        const userRepository : UserRepository = UserFactory.create();
        const user = userRepository.getUser(id);
        console.log({user: user});
    }
}