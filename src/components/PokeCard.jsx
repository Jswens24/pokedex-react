import React from 'react'

const PokeCard = (props) => {
    const onClickHandler = () => {
        props.addToTeam(props.pokemon.url)
    }

    return (
        <div className='pokecard'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`} alt='' />
            <h4>{props.pokemon.name}</h4>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}

export default PokeCard