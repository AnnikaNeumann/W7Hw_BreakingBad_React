import React from 'react';

// creating new component to deal/style the attributes individually
const CharacterAttributes = (
    attributes
) =>{

// the occupation of the API characters had a nested array and multiple elements at times. 
// created if statement to check if occupation does not come back as undefinded. 
// to being able to list all occupations if there more than 1, checking lengths of occupations. occupation then = the characters
// occupation for index 0 and index 1, cause there aren't any characters with more than 2 occupations, else show their attributes (of 1 only).


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