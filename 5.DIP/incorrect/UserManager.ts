import { UserRepository } from './UserRepository';
export class UserManager {
    showUser(): void {
        const userRepository = new UserRepository();
        const user = userRepository.getUser(1);
        console.log({user: user});
    }
}