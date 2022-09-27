import axios from 'axios'
import React, { useState } from 'react'
import PokeCard from './PokeCard'

const Pokedex = (props) => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [search, setSearch] = useState('');

    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    const getPokemon = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=100000')
            .then((res) => {
                console.log(res.data.results);
                let newArr = res.data.results.map((pokemon, index) => {
                    pokemon.id = index + 1
                    return pokemon
                });
                setAllPokemon(newArr);
            })
    }

    return (
        <div>
            <h2>Catch a Pokemon!</h2>
            <button onClick={getPokemon}>Load My Pokedex</button>
            <input onChange={searchHandler} type='text' placeholder='Search a Pokemon' />
            <div className='pokedex-container'>
                {allPokemon
                    .filter((pokemon) => {
                        return pokemon.name.includes(search)
                    })
                    .map((pokemon, index) => {
                        return <PokeCard addToTeam={props.addToTeam} pokemon={pokemon} index={index} />
                    })}
            </div>
        </div>
    )
}

export default Pokedex