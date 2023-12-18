import React from "react";
import { PokemonType } from "./Pokemon";
import Button from "./Button";

type ReleasePokemonFormType = {
    id: string;
    setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>;
}

export default function ReleasePokemonForm({ id, setPokemons }: ReleasePokemonFormType) {

    const [loading, setLoading] = React.useState<boolean>(false);

    async function deleteSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8080/api/v1/pokemons/delete?id=${id}`, {
                method: "DELETE",
                body: JSON.stringify({ id }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data: { pokemon: PokemonType } = await res.json();
            setPokemons(pokemons => {
                const newPokemons = pokemons.filter(pokemon => pokemon.id != data.pokemon.id);
                return newPokemons;
            })
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return <form className="poke-release" method="POST" onSubmit={deleteSubmitHandler}>
        <input hidden value={ id } type="text" />
        <Button isPrimary={false} isLoading={loading}>Release</Button>
    </form>
}