import { useState, useEffect } from "react";

import axios from "axios";

const MiApi = ({ setPokemon, pokemonList, pokemonListFiltered }) => {
    const [loading, setLoading] = useState(true);

    const GottaCatchEmAll = () => {
        const url = "";
        const max_pokemon = 151;

        //axios.get(url)
        //    .then((response) => {
        //        setPokemon(response.data.pokemon.slice(0, max_pokemon));
        //    })
        //    .catch((error) => {
        //        console.error("Error trying to get remote data:", error);

                import('../data/pokemon.json').then((data) => {
                    setPokemon(data.pokemon.slice(0, max_pokemon));
                }).catch((error) => {
                    console.error("Error trying to get local data", error);
                });
        //    }).finally(() => {
                setLoading(false);
        //    });
    };

    useEffect(() => {
        GottaCatchEmAll();
    }, []);

    if (loading) {
        return (
            <div className="pokemon-loading text-center mt-5">
                <p>Loading Pokémon data ...</p>
                <img src="./loading.png" />
            </div>
        );
    }

    if (!pokemonListFiltered.length) {
        return (
            <div className="pokemon-feedback d-flex align-items-center justify-content-center mx-auto mt-2 text-center">
                <img className="me-4" src="./pikachu2.png" />
                <div className="dialog dialog-right">
                    <span>No pokémon found!</span><br/>
                    <small>Total: {pokemonList.length}</small>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="pokemon-feedback d-flex align-items-center justify-content-center mx-auto mt-2 text-center">
                <img className="me-4" src="./pikachu1.png" />
                <div className="dialog dialog-right">
                    <span>Pokémon found: <b>{pokemonListFiltered.length}</b></span><br/>
                    <small>Total: {pokemonList.length}</small>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {pokemonListFiltered.map((pokemon) => (
                    <div key={pokemon.id} className="pokemon-card d-flex flex-column justify-content-between text-center" data-color={pokemon.color}>
                        <div className="pokemon-card-header d-flex justify-content-between align-items-center">
                            <span className="badge text-bg-light fs-6">
                                #{pokemon.id.toString().padStart(3, "0")}
                            </span>
                            <img src={pokemon.image_mini} />
                        </div>

                        <img className="my-4" src={pokemon.image} />

                        <b>{pokemon.name.toUpperCase()}</b>
                        
                        <b>XP : {pokemon.xp}</b>

                        <div className="my-2">
                            {pokemon.types.map((type) => (
                                <span key={type} className="pokemon-card-type badge text-bg-secondary mx-1" data-type={type}>{type}</span>
                            ))}
                        </div>

                        <div className="pokemon-description">
                            <small>{pokemon.description}</small>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MiApi;
