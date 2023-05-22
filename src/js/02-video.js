import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';


player.on('timeupdate', throttle(onTimeUpdate ,1000));

function onTimeUpdate({seconds}) {
    console.log(seconds);
    localStorage.setItem(STORAGE_KEY, seconds);
};
const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
player.setCurrentTime(currentTime);
};

// player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);
