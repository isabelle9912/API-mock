const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Aponta para o arquivo db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000; // Porta usada pelo ambiente (Vercel usará a variável de ambiente)
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
