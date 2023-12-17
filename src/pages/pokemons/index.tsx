/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import React from 'react'
import Pokemon, { PokemonType } from '../../../components/Pokemon';
import * as ReactDOM from "react-dom/client";
import Navbar from "../../../components/Navbar";

function Page() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [pokemons, setPokemons] = React.useState<PokemonType[]>([]);
    React.useEffect(() => {
        setLoading(true);
        async function getData() {
            const response = await fetch('http://localhost:8080/api/v1/pokemons', {
                method: 'GET'
            });
            const data: { pokemons: PokemonType[] } = await response.json();
            setPokemons(data.pokemons);
            setLoading(false);
        }
        getData();
    }, []);
    return <div className='content'>
            <div className='heading'>
                <h1 className='headline'>Pokemons</h1>
                <div className='spacer'></div>
                <p className='description'>Browse our complete Pokémon list - catch 'em all in one place!</p>
            </div>
            {loading && <div>Loading...</div>}
            {pokemons.map(pokemon => {
                return <Pokemon name={pokemon.name} type={pokemon.type} />
            })}
        </div>
}
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<>
    <Navbar />
    <Page />
</>);
