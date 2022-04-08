import React,{ useState, useEffect }  from 'react';
import Characters from '../components/Characters';

const BreakingBadBox = () =>{

    const[characters, setCharacter] = useState([]);

    useEffect(() => {
        getCharacters();

})

const getCharacters = function(){
    fetch('https://https://www.breakingbadapi.com/api/characters.com/v2/all')
    .then(res => res.json())
    // .then(character => console.log(character))
    .then(characters => setCharacter(characters))
}
}









export default BreakingBadBox;
