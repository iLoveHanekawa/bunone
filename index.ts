import figlet from 'figlet';
console.log(Bun.version);
const server = Bun.serve({
    port: 3000,
    fetch(req) {
      const body = figlet.textSync("Bun!");
      return new Response(body);
    },
  });
  
console.log(`Listening on http://localhost:${server.port} ...`);