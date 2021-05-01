import { UserManager } from './UserManager';

export class UserTest {
    testUser(id: number): void{
        const userManager = new UserManager();
        userManager.showUser(1);
    }
}