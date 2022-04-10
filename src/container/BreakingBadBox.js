import React,{ useState, useEffect }  from 'react';
import Characters from '../components/Characters';
// import from the next lower level which is Characters


const BreakingBadBox = () =>{

    const[characters, setCharacter] = useState([0]);
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
    if(typeof characters !== 'object'){
        return  null
    }else{
// returns the properties of JSX Element Characters
        return(

            <div className="WalterBox">
                <Characters characters={characters}/>
                <img src='./BbLogo.png' alt='Breaking Bad Image'/>
            </div>

        )
    }
}


export default BreakingBadBox;



{/* /<CharacterItem characters={characters} onCharacterClick={onCharacterClick} /> */}
