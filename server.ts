const router = new Bun.FileSystemRouter({
    style: "nextjs",
    dir: "./src/pages",
    origin: "http://localhost:3000",
    assetPrefix: "/build/pages"
});

async function start() {

  const builds = Object.keys(router.routes).map(async (pathname: string) => {
    return Bun.build({
      entrypoints: [router.routes[pathname]],
      outdir: './build' + pathname,
    });
  })

  Promise.all(builds);
  
  const server = Bun.serve({
    port: 3000,
    async fetch(req: Request) {
      const rewriter = new HTMLRewriter();
      const url = new URL(req.url);
      if (url.pathname.startsWith('/build')) {
        return new Response(Bun.file('./build' + url.pathname.substring(6)));
      }
      else if(url.pathname in router.routes) {
        const res = new Response(await Bun.file("./public/index.html").text());
        rewriter.on('html', {
          element: (element) => {
            element.append(`<script src="../build` + `${url.pathname}` + `/index.js"></script>`, { html: true });
          },
        });
        return new Response(await rewriter.transform(res).text(), {
          headers: {
            'Content-Type': 'text/html'
          }
        });
      }
      else return new Response("404!");
    },
  });
  console.log(`Listening on http://localhost:${server.port} ...`);
}

start();

