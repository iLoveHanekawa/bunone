import React from 'react';

export type PokemonType = {
    name: string;
    type: string;
}

export default function Pokemon({ name, type }: PokemonType) {
    return <div>
        <h3 className='poke-name'>{name}</h3>
        <h4 className='poke-type'>{type}</h4>
    </div>
}