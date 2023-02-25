import { createContext, useRef, useEffect, useState } from "react";

const AudioContext = createContext(null);

// Audio
import Chimes from "./../assets/audio/01-Chimes-64kbps.mp3";
import Xylophone from "./../assets/audio/02-Xylophone-64kbps.mp3";
import Chords from "./../assets/audio/03-Chords-64kbps.mp3";
import Tap from "./../assets/audio/04-Tap-64kbps.mp3";
import Jingle from "./../assets/audio/05-Jingle-64kbps.mp3";
import Transition from "./../assets/audio/06-Transition-64kbps.mp3";
import Descending from "./../assets/audio/07-Descending-64kbps.mp3";
import Bounce from "./../assets/audio/08-Bounce-64kbps.mp3";
import Echo from "./../assets/audio/09-Echo-64kbps.mp3";
import Ascending from "./../assets/audio/10-Ascending-64kbps.mp3";

export const AudioContextProvider = ({ children }) => {
   const soundList = [
      {
         title: "Chimes",
         src: Chimes,
      },
      {
         title: "Xylophone",
         src: Xylophone,
      },
      {
         title: "Chords",
         src: Chords,
      },
      {
         title: "Tap",
         src: Tap,
      },
      {
         title: "Jingle",
         src: Jingle,
      },
      {
         title: "Transition",
         src: Transition,
      },
      {
         title: "Descending",
         src: Descending,
      },
      {
         title: "Bounce",
         src: Bounce,
      },
      {
         title: "Echo",
         src: Echo,
      },
      {
         title: "Ascending",
         src: Ascending,
      },
   ];

   const audioRef = useRef();

   useEffect(() => {
      audioRef.current.addEventListener("ended", () => {
         stopAudio();
      });
   }, []);

   const [currentAudioTitle, setCurrentAudioTitle] = useState(null);

   const playAudio = ({ soundTitle, loop }) => {
      setCurrentAudioTitle(soundTitle);

      const soundSrc = soundList.filter(
         (sound) => sound.title === soundTitle
      )[0].src;

      // audioRef.current.pause();
      audioRef.current.src = soundSrc;
      audioRef.current.currentTime = 0;
      audioRef.current.play();

      loop
         ? audioRef.current.setAttribute("loop", null)
         : audioRef.current.removeAttribute("loop", null);
   };

   const STEP = 0.015; // in ms
   const SPEED = 5; // in ms

   const fadeInAudio = (startVol = 0.25, endVol = 1, callback) => {
      console.time("fade in time");

      const fadeInterval = setInterval(() => {
         startVol = Math.floor((startVol + STEP) * 1000) / 1000;

         if (startVol >= endVol) {
            clearInterval(fadeInterval);
            callback && callback();
            console.timeEnd("fade in time");

            return;
         }

         audioRef.current.volume = startVol;
         // console.log(startVol, endVol);
      }, SPEED);
   };

   const fadeOutAudio = (callback, startVol = 1, endVol = 0) => {
      const fadeInterval = setInterval(() => {
         startVol = Math.floor((startVol - STEP) * 100) / 100;

         if (startVol <= endVol) {
            clearInterval(fadeInterval);
            callback && callback();

            return;
         }

         // console.log(startVol, endVol);
         audioRef.current.volume = startVol;
      }, SPEED);
   };

   const pauseAudio = () => {
      audioRef.current.pause();
   };

   const stopAudio = () => {
      pauseAudio();

      setCurrentAudioTitle(null);
      audioRef.current.src = null;

      console.log("pause");
   };

   const fadeInPlayAudio = (src) => {
      audioRef.current.volume = 0;
      playAudio(src);
      fadeInAudio();
   };

   const fadeOutStopAudio = () => {
      fadeOutAudio(stopAudio);
   };

   const audio = {
      soundList,
      currentAudioTitle,
      play: fadeInPlayAudio,
      pause: pauseAudio,
      stop: fadeOutStopAudio,
   };

   return (
      <AudioContext.Provider value={audio}>
         <audio src={null} ref={audioRef}></audio>

         {children}
      </AudioContext.Provider>
   );
};

export default AudioContext;
