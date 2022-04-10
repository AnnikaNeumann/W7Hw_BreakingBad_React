import React from 'react';
import CharacterName from './CharacterName';
import CharacterAttributes from './CharacterAttributes';
import CharacterPhoto from './CharacterPhoto';

const CharacterItem = ({character, onCharacterClick}) =>{

    const handleClick = function(){
        onCharacterClick(character)
        // console.log(`Clicked on ${character.img}`)
    }
     
    let nameArray
    let firstName
    let lastName
    let searchString

    // Code I am proud of :)
    // if statement for character portrayed to check if there is a portrayed character. then we split the string based on any spaces.
    // firstName is always index 0 and because lastName can have multiples, we check the lengths and return index -1 to get the last index.
    // searchString then equals the ecosia search link where it comes back with the firstName plus space plus lastName (based on the character portrayed by)

    if(character.portrayed !== undefined){
        nameArray = character.portrayed.split(" ")
        firstName = nameArray[0]
        lastName = nameArray[nameArray.length-1]
        searchString = "https://www.ecosia.org/search?q="+firstName+"%20"+lastName
    }

    // if character equally to undefined then return null, else return div
    if (character === undefined)
    {
        return(
            null
        )
    }
    else{
        return(
            
            <div className="grid-item">
                <CharacterPhoto characterImage={character.img}/>               
                <button onClick={handleClick}><a href={searchString}>Find out more about the actor</a></button>
                <CharacterName characterName={character.name}/>
                <CharacterAttributes occupation={character.occupation} status={character.status} nickName={character.nickname}/>    
            </div>
        );
    } 
}



export default CharacterItem;

