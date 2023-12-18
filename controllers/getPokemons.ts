import { Database } from 'bun:sqlite'
import { PokemonType } from '../components/Pokemon';

export function getPokemons() {
    const DB = new Database('bun.sqlite', {
        create: true,
        readwrite: true
      });
    const pokemons: PokemonType[] = DB.query('SELECT * FROM pokemons;').all() as PokemonType[];
    return new Response(JSON.stringify({
        pokemons
    }));
}