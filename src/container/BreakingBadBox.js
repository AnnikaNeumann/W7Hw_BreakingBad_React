import React,{ useState, useEffect }  from 'react';
import CharacterDetail from '../components/CharacterDetail';
import CharacterItem from '../components/CharacterItem';
import Characters from '../components/Characters';
// import from the next lower level which is Characters

const BreakingBadBox = () =>{

    const[characters, setCharacter] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);


    useEffect(() => {
        getCharacters();

})

// anonymus function getCharacters to fetch the API, which then returns a json object, which then shows the characters
    const getCharacters = function(){
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    // .then(characters => console.log(characters))
    .then(characters => setCharacter(characters))
    }

    const onCharacterClick = function(character){
    setSelectedCharacter(character);
    }

// returns the properties of JSX Element Characters
    return(

        <div className="WalterBox">
            <Characters characters={characters}/>
            {/* <CharacterItem characters={characters} onCharacterClick={onCharacterClick} /> */}
        </div>

    )
}


export default BreakingBadBox;
