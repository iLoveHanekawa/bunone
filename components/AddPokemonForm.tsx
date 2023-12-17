import React from "react";
import { PokemonType } from '../components/Pokemon';
import Button from "./Button";
type AddPokemonFormType = {
    setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    isLoading: boolean
}

export default function AddPokemonForm({ setPokemons, setLoading, isLoading }: AddPokemonFormType) {
    
    const [pokeName, setPokeName] = React.useState<string>('');
    const [pokeType, setPokeType] = React.useState<string>('');
    
    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/pokemons/add', {
                method: "POST",
                body: JSON.stringify({ name: pokeName, type: pokeType }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data: { pokemon: PokemonType } = await response.json();
            console.log(data);
            if(response.status === 200) {
                setPokemons(pokemonArr => {
                    return [...pokemonArr, data.pokemon];
                });
            }
        } catch(error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return <form className='poke-form-add' onSubmit={onSubmitHandler} method="POST">
        <label className="poke-label" htmlFor="name">Pokemon Name</label>
        <input className="poke-input" id="name" type="text" value={pokeName} onChange={(event) => {
            setPokeName(event.currentTarget.value);
        }} />
        <label className="poke-label" htmlFor="type">Pokemon Type</label>
        <input className="poke-input" id="type" type="text" value={pokeType} onChange={(event) => {
            setPokeType(event.currentTarget.value);
        }} />
        <Button isLoading={isLoading} isPrimary={false}>Add pokemon</Button>
    </form>
}