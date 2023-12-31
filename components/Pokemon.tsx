import React from 'react';
import UpdatePokemonForm from './UpdatePokemonForm';
import ReleasePokemonForm from './ReleasePokemonForm';

export type PokemonType = {
    id: string
    name: string;
    type: string;
    setPokemons: React.Dispatch<React.SetStateAction<PokemonType[]>>
}

export default function Pokemon({ id, name, type, setPokemons }: PokemonType) {
    return <div>
        <h3 className='poke-name'>{name}</h3>
        <h4 className='poke-type'>{id}</h4>
        <UpdatePokemonForm id={id} setPokemons={setPokemons} />
        <ReleasePokemonForm id={id} setPokemons={setPokemons} />
    </div>
}