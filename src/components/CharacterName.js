import React from 'react';

// creating new component to handle the Character Name individually
const CharacterName = ({characterName}) =>{
    return (
        <div className="characterName">
            <p>Name : {characterName}</p>
        </div>
    )
 }

export default CharacterName;

// 