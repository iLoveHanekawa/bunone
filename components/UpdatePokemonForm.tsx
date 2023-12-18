import React, { FormEvent } from "react";
import Button from "./Button";
import { PokemonType } from "./Pokemon";

type UpdatePokemonFormType = {
    id: string
    setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>
}

export default function UpdatePokemonForm({ id, setPokemons }: UpdatePokemonFormType) {
    
    const [nickname, setNickname] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);

    async function updateSubmidHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/pokemons/update-name', {
                method: "POST",
                body: JSON.stringify({
                    id: id,
                    name: nickname
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data: { pokemon: PokemonType} = await response.json();
            setPokemons(pokemons => {
                const index = pokemons.findIndex(pokemon => pokemon.id = data.pokemon.id);
                pokemons[index].name = data.pokemon.name;
                return [...pokemons];
            })
            return {
                pokemon: data.pokemon
            }
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return <form method="POST" onSubmit={updateSubmidHandler}>
        <input type="text" className="poke-input" value={nickname} onChange={(e) => {
            setNickname(e.currentTarget.value);
        }} />
        <input type="text" hidden value={id} />
        <Button isLoading={false} isPrimary={false}>Change nickname</Button>
        {loading && <div className='loading-spinner'></div>}
    </form>
}