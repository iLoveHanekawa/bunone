import { Database } from "bun:sqlite";
import { PokemonType } from "../components/Pokemon";

export async function deletePokemon(req: Request) {
    const DB = new Database('bun.sqlite', {
        readwrite: true
    });
    const body: { id: string } = await req.json();
    const deletedPokemon: PokemonType = DB.query(`SELECT * FROM pokemons WHERE id=${body.id}`).get() as PokemonType;
    DB.query(`DELETE FROM pokemons WHERE id = ${body.id};`).run();
    return new Response(JSON.stringify({ pokemon: deletedPokemon }))
}