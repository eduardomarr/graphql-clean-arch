 # 🚀 Express.js & GraphQL with Clean Architecture

Simplified & Scalable backend structure for developers who appreciate the simplicity and flexibility of **Express.js**, the power of **GraphQL**, and the robustness of **Clean Architecture**.

## ✨ Features

- **Clean Architecture**: Domain → Application → Interfaces → Infrastructure.
- **GraphQL API**: Modern, flexible queries and mutations.
- **Scalability & Maintainability**: Easily swap frameworks or databases without touching core logic.
- **CLI Scaffolding**: Inspired by NestJS, easily generate a boilerplate via a single command.

## ⚙️ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/eduardomarr/graphql-clean-arch.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

Your server will be running at:

```
http://localhost:4000/graphql
```

## 🛠️ Generate new use cases

To create new use cases, entities, repositories, and in-memory repositories, use the CLI:

```bash
npm run gen usecase [NAME_OF_YOUR_USECASE]
```

This command automatically generates all the necessary files, ensuring a consistent project structure and saving you time.

## 🗃️ ORM Integration

The project initially includes an `InMemoryRepo`. To integrate your preferred ORM (Prisma, Sequelize, TypeORM):

- Create your new ORM-based repository (e.g., `PrismaRepo`).
- Replace the `InMemoryRepo` injection in the infrastructure layer.
- **No other changes needed!** Your business logic remains intact.

## 💡 Contributions & Feedback

Feel free to contribute or suggest improvements!

---

Made with ❤️ and Clean Code.

## 📌 Tech Stack

- Node.js
- Express.js
- GraphQL
- TypeScript
- Clean Architecture

## 🔖 License

[MIT](LICENSE)

---

Let's build cleaner, scalable Express apps together!

