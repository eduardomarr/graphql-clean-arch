import { createExpressApp } from "./infrastructure/server/ApolloServer";

(async () => {
  const app = await createExpressApp();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`🚀  http://localhost:${PORT}/graphql`));
})();