import { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  // helper for name and PascalCase
  interface PascalHelper {
    (txt: string): string;
  }

  plop.setHelper('pascal', ((txt: string): string =>
    txt.replace(/(^\w|_\w)/g, (m: string) => m.replace('_', '').toUpperCase())
  ) as PascalHelper);

  // generator "usecase"
  plop.setGenerator('usecase', {
    description: 'New use case + artifacts Clean Architecture',
    prompts: [
      {
        type: 'input',
        name: 'entity',
        message: 'Nome of Entity (PascalCase):',
      },
    ],
    actions: [
      // 1) Use-case
      {
        type: 'add',
        path: 'src/applications/use-cases/Create{{pascal entity}}.ts',
        templateFile: 'plop-templates/usecase.hbs',
      },
      // 2) Entity
      {
        type: 'add',
        path: 'src/domain/entities/{{pascal entity}}.ts',
        templateFile: 'plop-templates/entity.hbs',
      },
      // 3) Repository interface
      {
        type: 'add',
        path: 'src/domain/repositories/{{pascal entity}}Repository.ts',
        templateFile: 'plop-templates/repository.hbs',
      },
      // 4) In-memory repo
      {
        type: 'add',
        path: 'src/infrastructure/db/InMemory{{pascal entity}}Repo.ts',
        templateFile: 'plop-templates/inMemoryRepo.hbs',
      },
    ],
  });
}
