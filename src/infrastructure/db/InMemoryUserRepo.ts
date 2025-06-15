import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/userRepository";

export class InMemoryUserRepo implements UserRepository {
  private store = new Map<string, User>();

  async save(user: User) {
    this.store.set(user.id, user);
  }

  async findById(id: string) {
    return this.store.get(id) || null;
  }
}
