const next = require("next");
const expressServer = require("./express");
const dev = process.env.NODE_ENV !== "production";
let app = next({ dir: "src/app", dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = expressServer(app, handle);
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
