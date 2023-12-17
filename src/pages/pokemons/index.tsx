/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import * as ReactDOM from "react-dom/client";
import Navbar from "../../../components/Navbar";
function Page() {
    return <div>This is all pokemons route</div>
}
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<>
    <Navbar />
    <Page />
</>);
