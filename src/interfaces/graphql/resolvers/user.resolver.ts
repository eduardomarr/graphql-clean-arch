import { CreateUser } from "../../../applications/use-cases/CreateUser";
import { UserRepository } from "../../../domain/repositories/userRepository";

export const userResolver = (repo: UserRepository) => ({
  Query: {
    user: (_: any, { id }: { id: string }) => repo.findById(id),
  },
  Mutation: {
    createUser: async (
      _: any,
      { name, email }: { name: string; email: string }
    ) => {
      const useCase = new CreateUser(repo);
      return useCase.execute({ name, email });
    },
  },
});
