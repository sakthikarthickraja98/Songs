import {combineReducers} from 'redux';

const songReducer = () => {
    return[
        {title: "simtanagran", duration:"4:05"},
        {title: "kaasu panam", duration:"6:25"},
        {title: "Darlingu dambaku", duration:"5:13"},
        {title: "Vai Raja Vai", duration:"2:15"},
        {title: "U1 hits", duration:"7:49"},
        {title: "Yennavalae", duration:"9:54"},
        {title: "SPB hits", duration:"4:23"},
        {title: "Raja Rani", duration:"6.06"},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECT'){
      return action.payload;
  }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSongs: selectedSongReducer
});