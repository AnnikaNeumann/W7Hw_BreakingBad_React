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
            <div className="grid-item">
                <p><img src={character.img} className="Photo"/><button onClick={handleClick}><a href="https://www.imdb.com/title/tt0903747/?ref_=fn_al_tt_1">Click for more cooking content</a></button></p>
                <p>{character.name}</p>
                <p>{occupation}</p>
                <p>{character.nickname}</p>
            </div>
        );
    } 
}



export default CharacterItem;

