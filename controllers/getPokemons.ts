import { Database } from 'bun:sqlite'

export function getPokemons() {
    const DB = new Database('bun.sqlite', {
        create: true,
        readwrite: true
      });
    const pokemons = DB.query('SELECT * FROM pokemons;').all();
    return new Response(JSON.stringify({
        pokemons
    }));
}