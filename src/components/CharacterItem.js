import React from 'react';

const CharacterItem = ({character}) =>{








    return(
        <>
        <ol>
            <li>{character.name}</li>
            <li>{character.occupation}</li>
            <li><img src = {character.img}></img></li>
            <li>{character.portrayed}</li>
        </ol>
        </>

    )

}



export default CharacterItem;

