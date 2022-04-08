import React from 'react';

const CharacterItem = ({character}) =>{


    return(
        <>
        <tr>
            <td>{character.name}</td>
            <td>{character.occupation}</td>
            <td>{character.portrayed}</td>
        </tr>
        </>
    );
};



export default CharacterItem;

