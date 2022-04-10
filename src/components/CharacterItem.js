import React from 'react';
// import CharacterDetail from './CharacterDetail';

const CharacterItem = ({character, onCharacterClick}) =>{

    const handleClick = function(){
        onCharacterClick(character)
        // console.log(`Clicked on ${character.img}`)
    }
     
    let occupation
    if (character !== undefined)
    {
        if(character.occupation !== undefined){
            if(character.occupation.length > 1){
                occupation = `${character.occupation[0]}, ${character.occupation[1]}`
            }
            else{
                occupation = character.occupation
            }
        }
    }

    if (character === undefined)
    {
        return(
            null
        )
    }
    else{
        return(
            
            <tr>
                <td>{character.name}</td>
                <td>{occupation}</td>
                <td>{character.nickname}</td>
                <td><img src={character.img} className="Photo"/><button onClick={handleClick}><a href="https://www.imdb.com/title/tt0903747/?ref_=fn_al_tt_1">Click for more cooking content</a></button></td>
            </tr> 
        );
    }
    
}



export default CharacterItem;

