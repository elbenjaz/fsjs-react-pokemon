import { useState } from 'react';

import Buscador from './components/Buscador';
import MiApi from './components/MiApi';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [pokemonList, setPokemon] = useState([]);
    const [filter, setFilter] = useState({
        order : "name_asc",
        color : "",
        type  : "",
        text  : ""
    });

    const filterAndOrder = () => {
        //filter
        let filtered = pokemonList.filter(pokemon => {
            const matchByID    = Number(filter.text) ? pokemon.id === Number(filter.text) : true;
            const matchByType  = filter.type ? pokemon.types.includes(filter.type) : true;
            const matchByColor = filter.color ? pokemon.color === filter.color : true;

            const matchByText = (text) => text.toString().toLowerCase().startsWith(filter.text.trim().toLowerCase());

            return matchByID && matchByType && matchByColor && (matchByText(pokemon.name) || matchByText(pokemon.color));
        });

        //order
        switch(filter.order) {
            case "id_asc":
                filtered.sort((a, b) => a.id - b.id);
                break;

            case "name_asc":
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return filtered;
    };

    const pokemonListFiltered = filterAndOrder();

    return (
        <>
        <nav className="p-4 d-flex flex-wrap justify-content-center justify-content-lg-between">
            <img src="./logo.png" className="me-4 mb-2" />
            <Buscador filter={filter} setFilter={setFilter} />
        </nav>

        <div className="Pokemon">
            <MiApi setPokemon={setPokemon} pokemonList={pokemonList} pokemonListFiltered={pokemonListFiltered} />
        </div>
        </>
    )
};

export default App;
