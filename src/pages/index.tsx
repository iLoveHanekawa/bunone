/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import * as ReactDOM from "react-dom/client";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

function Page() {
    return <div className='content'>
            <div className='heading'>
                <h1 className='headline'>Home Page</h1>
                <div className='spacer'></div>
                <p className='description'>Your ultimate Pokémon companion app - catch, explore, and learn about all Pokémon effortlessly!</p>
            </div>
            <a href='http://localhost:8080/pokemons'>
                <Button isPrimary={true}>Browse</Button>
            </a>
        </div>
}
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<>
    <Navbar />
    <Page />
</>);
