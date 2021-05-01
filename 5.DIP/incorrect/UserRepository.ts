import { User } from "./User";

export class UserRepository {
    getUser(id: number): User {
        return new User(1, 'John', 'john@gmail.com');
    }
}