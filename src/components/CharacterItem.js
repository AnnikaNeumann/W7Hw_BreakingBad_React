import React from 'react';
import CharacterDetail from './CharacterDetail';

const CharacterItem = ({character, onCharacterClick}) =>{

    const handleClick = function(){
        onCharacterClick(character)
        // console.log(`Clicked on ${character.img}`)
    }


    return(
            
        <tr>
            <td>{character.name}</td>
            <td>{character.occupation}</td>
            <td>{character.nickname}</td>
            <td><img src={character.img} className="Photo" onClick={handleClick}></img><a href="https://www.imdb.com/title/tt0903747/?ref_=fn_al_tt_1">Click for more cooking content</a></td>

        </tr>
        
    );
}



export default CharacterItem;

