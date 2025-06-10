import { CreateUser } from "../../../applications/useCases/createUser.useCase";
import { IUserRepository } from "../../../domain/repositories/user.repository";

export const userResolver = (repo: IUserRepository) => ({
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
