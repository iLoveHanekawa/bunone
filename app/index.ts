/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import figlet from 'figlet';
console.log(Bun.version);
const server = Bun.serve({
    port: 3000,
    fetch(req) {
      const body = figlet.textSync("Hi Arjunx!");
      return new Response(body);
    },
  });
console.log(`Listening on http://localhost:${server.port} ...`);