import React from 'react';
import CharacterItem from './CharacterItem';


const Characters = ({characters}) => {

    const characterItems = characters.map((character, index) => {
        return <CharacterItem character={character} key={index}/>
    });

    return (
        <div className = "Character">
            <ol>
            <li>Name</li>
            <li>Occupation</li>
            <li>Portrayed By</li>
            {characterItems}
            </ol>
        </div>


    );
};

export default Characters;


