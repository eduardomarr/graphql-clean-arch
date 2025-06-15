import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/userRepository";

export class CreateUser {
  constructor(private repo: UserRepository) {}

  async execute(params: { name: string; email: string }) {
    const user = new User(crypto.randomUUID(), params.name, params.email);
    await this.repo.save(user);
    return user;
  }
}