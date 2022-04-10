import React from 'react';

// create new component for the photo to deal with it individually

    const CharacterPhoto = (props) =>{

        return(
            <div>
                <img src={props.characterImage} alt="Image of actor" className="img"/>
            </div>
        )
    }


export default CharacterPhoto;





