import { router as _router, create, defaults } from "json-server"; // importing json-server library
const server = create();
const router = _router("db.json");
const middlewares = defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);
