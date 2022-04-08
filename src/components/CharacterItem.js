import React from 'react';

const CharacterItem = ({character}) =>{


    return(
        <>
        <ol>
            <h1>Find your Meth Lab Partner</h1>
            {/* <li>{character.name}</li> */}
            <li>{character.occupation}</li>
            <li>{character.portrayed}</li>
        </ol>
        </>
    );
};



export default CharacterItem;

