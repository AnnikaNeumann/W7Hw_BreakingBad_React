import React from 'react';

// creating new component to deal/style the attributes individually
const CharacterAttributes = (
    attributes
) =>{

    
    let occupation
    if(attributes.occupation !== undefined){
        if(attributes.occupation.length > 1){
            occupation = `${attributes.occupation[0]}, ${attributes.occupation[1]}`
        }else{
            occupation = attributes.occupation
        }
    }

    return (
        <div className="characterName">
            <p>Occupation : {occupation}</p>
            <p>Status: {attributes.status}</p>
            <p>Nickname: {attributes.nickName}</p>
        </div>
    )
 }














export default CharacterAttributes;