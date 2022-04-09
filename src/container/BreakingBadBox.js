import React,{ useState, useEffect }  from 'react';
import Characters from '../components/Characters';
// import CharacterDetail from '../components/CharacterDetail';
// import from the next lower level which is Characters

const BreakingBadBox = () =>{

    const[characters, setCharacter] = useState([]);
    // const [selectedCharacter, setSelectedCharacter] = useState(null);


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
    // const onCharacterClick = function(character){
    // setSelectedCharacter(character);


// returns the properties of JSX Element Characters
    return(

        <div className="WalterBox">
            <Characters characters={characters}/>
            {/* {selectedCharacter ? <CharacterDetail props={selectedCharacter}/> :null} */}
        </div>

    )
}


export default BreakingBadBox;
