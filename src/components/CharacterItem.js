import React from 'react';

const CharacterItem = ({character, setSelectedCharacter}) =>{

    return(
        
        <tr>
            <td>{character.name}</td>
            <td>{character.occupation[0]}</td>
            <td>{character.nickname}</td>
            <td><img src={character.img} className="Photo"></img></td>
        </tr>
        
    );
}



export default CharacterItem;

