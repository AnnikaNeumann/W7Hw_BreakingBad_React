import React from 'react';
import CharacterItem from './CharacterItem';
// import from the next lower level which is CharacterItem


const Characters=({characters}) => {

    const characterItems=characters.map((character, index) => {
        return <CharacterItem character={character} key={index}/>
    })

    return (
        <div className="Character">
            <table>
                <tr>
                    <th>Character</th>
                    <th>Occupation</th>
                </tr>
            {characterItems}
           
            </table>
        </div>


    );
};

export default Characters;


