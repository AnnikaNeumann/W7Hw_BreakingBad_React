import React from 'react';
import CharacterItem from './CharacterItem';
// import from the next lower level which is CharacterItem

// with this function and JSX Element and passed in characters and the onButtonClick we map through the characters API array, 
// which is then stored in the characterItems list in the table.
// if statement for if index is >= 12 elements, then return CharacterItem (else around 50 characters would render)
const Characters=({characters, onButtonClick}) => {

    const characterItems=characters.map((character, index) => {
        if(index >= 12){
            return
        }
            
        return <CharacterItem character={character} key={index} onButtonClick={onButtonClick}/>
    });

    if (characters === undefined)
        {
            return(
                null
            )
        } else{

            // returning a table with variable name characterItems with the array of all characters of that API we've mapped through

        return (
            <div className="grid-container">
                
                {characterItems}
            
            </div>
        );
    }
};

export default Characters;


