import { useState, useEffect, useRef } from "react";

import Digits from "../../ui/Digits";
import CustomButton from "../../ui/CustomButton/CustomButton";

import {
   Play16Filled as StartIcon,
   Pause16Filled as PauseIcon,
   ArrowCounterclockwise16Regular as ResetIcon,
   // ArrowMaximize24Regular as FullscreenIcon,
   Flag16Filled as FlagIcon,
} from "@fluentui/react-icons";

import styles from "./styles.module.css";

function Stopwatch({
   stopwatch: {
      time,
      isRunning,
      flags,
      actions: {
         toggleStartStopwatch,
         resetStopwatch,
         addFlag,
         fullscreen,
         formatTime,
      },
   },
}) {
   const tableContentRef = useRef();

   useEffect(() => {
      if (flags && flags.length > 0) {
         const element = tableContentRef.current;
         element.scrollTop = -element.scrollHeight;
      }
   }, [flags]);

   const recordFlags =
      flags &&
      flags.length > 1 &&
      flags.reduce(
         (prev, cur) => {
            prev.min = cur.time < prev.min?.time ? cur : prev.min ?? cur;
            prev.max = cur.time > prev.max?.time ? cur : prev.max ?? cur;
            return prev;
         },
         { min: undefined, max: undefined }
      );

   const slowestFlagId = recordFlags?.max?.id;
   const fastestFlagId = recordFlags?.min?.id;

   // resize to fit

   const mainRef = useRef();
   const containerRef = useRef();

   const [scale, setScale] = useState(1);

   useEffect(() => {
      fitToContainer();
      window.addEventListener("resize", fitToContainer);
      return () => window.removeEventListener("resize", fitToContainer);
   }, []);

   const fitToContainer = () => {
      const mainWidth = mainRef.current.offsetWidth,
         mainHeight = mainRef.current.offsetHeight,
         containerWidth = containerRef.current.offsetWidth,
         containerHeight = containerRef.current.offsetHeight;

      /* prettier-ignore */
      let scale = Math.min(
         containerWidth / mainWidth,
         containerHeight / mainHeight
      ).toFixed(2);

      // console.log(scale);

      setScale(scale > 1 ? 1 : scale);
   };

   return (
      <div className={styles.stopwatch}>
         <div className={styles["stopwatch__main"]} ref={containerRef}>
            <div
               className={styles["stopwatch__inner"]}
               ref={mainRef}
               style={{ transform: `scale(${scale})` }}
            >
               {/* <header>
                  <Button
                     onClick={(e) => {
                        e.stopPropagation();
                        fullscreen();
                     }}
                     icon={<FullscreenIcon />}
                     appearance="subtle"
                     disabled
                  ></Button>
               </header> */}

               <div className={styles["stopwatch__digits"]}>
                  <Digits time={time} helpers={true} isRunning={isRunning} />
               </div>
               <div className={styles["stopwatch__controls"]}>
                  <CustomButton
                     onClick={(e) => {
                        e.stopPropagation();
                        toggleStartStopwatch();
                     }}
                     icon={isRunning ? <PauseIcon /> : <StartIcon />}
                     appearance="primary"
                     shape="circular"
                  ></CustomButton>
                  <CustomButton
                     onClick={(e) => {
                        e.stopPropagation();
                        addFlag();
                     }}
                     icon={<FlagIcon />}
                     shape="circular"
                     disabled={!isRunning}
                  ></CustomButton>
                  <CustomButton
                     onClick={(e) => {
                        e.stopPropagation();
                        resetStopwatch();
                     }}
                     icon={<ResetIcon />}
                     shape="circular"
                     disabled={time === 0}
                  ></CustomButton>
               </div>
            </div>
         </div>

         {flags && flags.length > 0 && (
            <div className={styles.table}>
               <div className={`${styles.row} ${styles["table--header"]}`}>
                  <div>Laps</div>
                  <div>Time</div>
                  <div>Total</div>
               </div>
               <div className={styles["table--content"]} ref={tableContentRef}>
                  {flags.map((flag) => (
                     <div className={styles.row} key={flag.id}>
                        {/* prettier-ignore */}
                        <div>
                           {flag.id}
                           {
                              flags.length > 1 &&
                                 slowestFlagId === flag.id ? (
                                    <span className={styles.record}>Slowest</span>
                                 ) : fastestFlagId === flag.id ? (
                                    <span className={styles.record}>Fastest</span>
                                 ) : null
                           }
                        </div>
                        <div>{formatTime(flag.time)}</div>
                        <div>{formatTime(flag.total)}</div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
}

export default Stopwatch;
