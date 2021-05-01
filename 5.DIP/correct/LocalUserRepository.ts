import { User } from "./User";
import { UserRepository } from "./UserRepository";

export class LocalUserRepository implements UserRepository {
    getUser(id: number): User {
        return new User(1, 'John', 'john@gmail.com');
    }
}