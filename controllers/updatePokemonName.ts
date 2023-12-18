import { Database } from "bun:sqlite";

export async function updatePokemonName(req: Request) {
    const DB: Database = new Database("bun.sqlite", {
        readwrite: true
    })
    const { id, name }: { id: string, name: string } = await req.json();
    DB.query(`UPDATE pokemons SET name = '${name}' WHERE id = ${id};`).run();
    const updatedPokemon = DB.query(`SELECT * FROM pokemons WHERE id=${id}`).get();
    return new Response(JSON.stringify({
        pokemon: updatedPokemon
    }));
}