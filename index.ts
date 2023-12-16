const server = Bun.serve({
  port: 3000,
  fetch(req: Request) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(Bun.file('./public/index.html'));
    if (url.pathname === "/out/script.js") return new Response(Bun.file('./out/script.js'));
    return new Response("404!");
  },
});

const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages",
  origin: "http://localhost:3000",
  assetPrefix: "build/pages/"
});


console.log(router.match("/"));

console.log(`Listening on http://localhost:${server.port} ...`);
