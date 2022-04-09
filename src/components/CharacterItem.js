import React from 'react';

const CharacterItem = ({character, setSelectedCharacter}) =>{

    return(
        
        <tr>
            <td>{character.name}</td>
            <td>{character.occupation[0]}</td>
            <td>{character.img}</td>
        </tr>
        
    );
};



export default CharacterItem;

