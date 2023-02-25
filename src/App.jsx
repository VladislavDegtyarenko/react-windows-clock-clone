import { useContext, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Main Components
// import TimerApp from "./Apps/TimerApp";
// import AlarmApp from "./Apps/AlarmApp";
// import StopwatchApp from "./Apps/StopwatchApp";
// import WorldClockApp from "./Apps/WorldClockApp";
// import Settings from "./Apps/Settings";
// import Sidebar from "./ui/Sidebar";
// import Modal from "./ui/Modal";

const TimerApp = lazy(() => import("./Apps/TimerApp"));
const AlarmApp = lazy(() => import("./Apps/AlarmApp"));
const StopwatchApp = lazy(() => import("./Apps/StopwatchApp"));
const WorldClockApp = lazy(() => import("./Apps/WorldClockApp"));
const Settings = lazy(() => import("./Apps/Settings"));
const Sidebar = lazy(() => import("./ui/Sidebar"));
const Modal = lazy(() => import("./ui/Modal"));

// Styles
import styles from "./App.module.css";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Contexts
import ModalContext from "./Contexts/ModalContext";
import AudioContext from "./Contexts/AudioContext";

// const ModalContext = lazy(() => import("./Contexts/ModalContext"));
// const AudioContext = lazy(() => import("./Contexts/AudioContext"));

import Loading from "./ui/Loading";

function App() {
  const { modalContent } = useContext(ModalContext);
  const audio = useContext(AudioContext);

  const location = useLocation();

  return (
    <div className={styles.app}>
      <Suspense fallback={<Loading />}>
        <Sidebar />
        <main className={styles.main}>
          <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<TimerApp />} />
                <Route path="/alarm" element={<AlarmApp />} />
                <Route path="/stopwatch" element={<StopwatchApp />} />
                <Route path="/worldclock" element={<WorldClockApp />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        {
          <Suspense fallback={<Loading />}>
            <AnimatePresence>
              {modalContent ? <Modal>{modalContent}</Modal> : null}
            </AnimatePresence>
          </Suspense>
        }
      </Suspense>
    </div>
  );
}

export default App;
