import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/repositories/user.repository";

export class CreateUser {
  constructor(private repo: IUserRepository) {}

  async execute(params: { name: string; email: string }) {
    const user = new User(crypto.randomUUID(), params.name, params.email);
    await this.repo.save(user);
    return user;
  }
}