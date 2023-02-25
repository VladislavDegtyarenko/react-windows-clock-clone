import { Dropdown } from "@fluentui/react-components/unstable";
import AlarmSoundOption from "./AlarmSoundOption";
import { MusicNote124Regular as SoundIcon } from "@fluentui/react-icons";

import { useContext } from "react";

import AudioContext from "../../Contexts/AudioContext";

import styles from "./AlarmDropdown.module.css";

const DEFAULT_AUDIO = "Echo";

function AlarmSoundsDropdown({ soundTitle, refs }) {
   const { soundList, play, stop, currentAudioTitle } =
      useContext(AudioContext);

   console.log(`currentAudioTitle: ${currentAudioTitle}`);

   return (
      <div className={styles.dropdown}>
         <div className={styles["dropdown__icon"]}>
            <SoundIcon />
         </div>
         <Dropdown
            className={styles["dropdown__menu"]}
            defaultSelectedOptions={[soundTitle || DEFAULT_AUDIO]}
            ref={refs}
         >
            {soundList.map((sound) => (
               <AlarmSoundOption
                  option={sound.title}
                  key={sound.title}
                  id={sound.title}
                  currentAudioTitle={currentAudioTitle}
                  playSound={() =>
                     play({ soundTitle: sound.title, loop: false })
                  }
                  stopSound={stop}
               />
            ))}
         </Dropdown>
      </div>
   );
}

export default AlarmSoundsDropdown;
