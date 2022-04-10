import React from 'react';
import CharacterItem from './CharacterItem';
// import from the next lower level which is CharacterItem

// with this function and JSX Element and passed in characters and the onCharacterClick we map through the characters API array, 
// which is then stored in the characterItems list in the table.

const Characters=({characters, onCharacterClick}) => {

    const characterItems=characters.map((character, index) => {
        if(index >= 12)
            return
        return <CharacterItem character={character} key={index} onCharacterClick={onCharacterClick}/>
    });

// returning a table with variable name characterItems with the array of all characters of that API we've mapped through
    
    if (characters === undefined)
        {
            return(
                null
            )
        } else{

        return (
            <div className="grid-container">
                
                {characterItems}
            
            </div>
        );
    }
};

export default Characters;


