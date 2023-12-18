import Database from "bun:sqlite";
import { PokemonType } from "../components/Pokemon";

export async function addPokemon(req: Request) {
    const DB = new Database('bun.sqlite', {
        readwrite: true
    });
    let pokemon: PokemonType = await req.json();
    DB.query(`INSERT INTO pokemons (name, type) VALUES ('${pokemon.name}', '${pokemon.type}');`).get();
    pokemon = DB.query(`SELECT * FROM pokemons WHERE name = '${pokemon.name}' AND type = '${pokemon.type}';`).get() as PokemonType;
    return new Response(JSON.stringify({ pokemon }), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}