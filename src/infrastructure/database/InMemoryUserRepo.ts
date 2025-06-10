import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository";

export class InMemoryUserRepo implements IUserRepository {
  private store = new Map<string, User>();

  async save(user: User) {
    this.store.set(user.id, user);
  }

  async findById(id: string) {
    return this.store.get(id) || null;
  }
}
