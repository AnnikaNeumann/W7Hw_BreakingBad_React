import React from 'react';
import CharacterItem from './CharacterItem';


const Characters = ({characters}) => {

    const characterItems = characters.map((character, index) => {
        return <CharacterItem character={character} key={index}/>
    });

    return (
        <div className = "Character">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Portrayed By</th>
                    </tr>
            {characterItems}
           
            </table>
        </div>


    );
};

export default Characters;


