import React from 'react';
// import Characters from './component/Characters';


const Characters = ({characters}) => {

    const characterItems = characters.map((character, index) => {
        return <CharacterItem character={character} key={index}/>
    });

    return (
        <div classname Character>
            <ol>
            <li>Character Name</li>
            <li>Character Occupation</li>
            <li>Character img</li>
            <li>Character Portrayed</li>



            </ol>
        </div>


    )
}

export default Characters;


