import React,{ useState, useEffect }  from 'react';
import Characters from '../components/Characters';
import CharacterItem from '../components/CharacterItem';

const BreakingBadBox = () =>{

    const[characters, setCharacter] = useState([]);


    useEffect(() => {
        getCharacters();

})

const getCharacters = function(){
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    // .then(characters => console.log(characters))
    .then(characters => setCharacter(characters))
}


    return(

        <div className="WalterBox">
            {/* <CharacterItem characters={characters}/> */}

        </div>

    )

}





export default BreakingBadBox;