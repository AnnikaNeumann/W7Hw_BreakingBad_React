import React from 'react';
// import CharacterDetail from './CharacterDetail';

const CharacterItem = ({character, onCharacterClick}) =>{

    const handleClick = function(){
        onCharacterClick(character)
        // console.log(`Clicked on ${character.img}`)
    }
     
    let occupation
    let nameArray
    let firstName
    let lastName

    let searchString = "https://www.ecosia.org/search?q="+firstName+"%20"+lastName

    if(character.occupation !== undefined){
        if(character.occupation.length > 1){
            occupation = `${character.occupation[0]}, ${character.occupation[1]}`
        }
        else{
            occupation = character.occupation
        }
    }
    // if statement for character portrayed to check if there is a portrayed character. then we split the string of names based on the spaces between each string.
    // firstName is always index 0 and because lastName can have multiples, we check the lengths and return index -1 to get the last index.
    // searchString then equals the ecosia search link where it comes back with the firstName plus space plus lastName (based on the character portrayed by)

    if(character.portrayed !== undefined){
        nameArray = character.portrayed.split(" ")
        firstName = nameArray[0]
        lastName = nameArray[nameArray.length-1]
        searchString = "https://www.ecosia.org/search?q="+firstName+"%20"+lastName
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
                <p><img src={character.img} className="Photo"/><button onClick={handleClick}>
                    <a href={searchString}>Find out more about the actor</a></button>
                </p>
                <p>{character.name}</p>
                <p>{occupation}</p>
                <p>{character.nickname}</p>
            </div>
        );
    } 
}



export default CharacterItem;

