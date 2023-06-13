import express from "express";
import Options from "../types/options";
import path from "path";

function createServer(options: Options, port: number) {
  return new Promise<{ close: () => void }>((resolve) => {
    const app = express();

    app.use(express.static(options.buildDir, { dotfiles: "allow" }));
    app.get("*", (_, res) =>
      res.sendFile(path.join(options.buildDir, "index.html"))
    );

    const server = app.listen(port, serverCreated);

    function serverCreated() {
      resolve({
        close() {
          server.close();
        },
      });
    }
  });
}

export default createServer;
