import { Option } from "@fluentui/react-components/unstable";
import {
   Play16Filled as PlayIcon,
   Pause16Filled as PauseIcon,
} from "@fluentui/react-icons";

import styles from "./AlarmSoundOption.module.css";

function AlarmSoundOption({ playSound, stopSound, option, currentAudioTitle }) {
   const isPlaying = currentAudioTitle === option;

   const handleClick = (e) => {
      e.stopPropagation();
      isPlaying ? stopSound() : playSound();
   };

   return (
      <>
         <Option className={styles.option} text={option}>
            <button className={styles.play} onClick={handleClick}>
               {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <span>{option}</span>
         </Option>
      </>
   );
}

export default AlarmSoundOption;
