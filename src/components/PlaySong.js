import Sound from 'react-sound';
import {useState} from 'react';
import BreakingBad from '../static/BreakingBad'

const PlaySong =(handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) =>{


    const [isPlaying, setIsPlaying] = useState(false);


    return(
        <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'} </button>
        <Sound
        url={BreakingBad}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}/>
        </div>

    );
};

export default PlaySong;