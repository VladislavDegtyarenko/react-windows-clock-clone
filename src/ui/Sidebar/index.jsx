import { useState, useRef, useEffect } from "react";

import { NavLink } from "react-router-dom";
import SidebarListItem from "./SidebarListItem";

import styles from "./Sidebar.module.css";

import {
  Navigation16Regular as BurgerIcon,
  Timer16Regular as StopwatchIcon,
  Earth16Regular as WorldClockIcon,
  // Person16Regular as AccountIcon,
  Settings16Filled as SettingsIcon,
} from "@fluentui/react-icons";

// import ClockIcon from "./../../assets/icons/clock.png";
import ClockIcon from "../../assets/icons/clock.svg";

import { default as TimerIcon } from "../../assets/icons/sand-clock";
import { default as AlarmIcon } from "../../assets/icons/BellIcon";

function Sidebar() {
  const navBtns = [
    {
      name: "Timer",
      icon: <TimerIcon />,
      link: "/react-windows-clock-clone/",
    },
    {
      name: "Alarm",
      icon: <AlarmIcon />,
      link: "/react-windows-clock-clone/alarm",
    },
    {
      name: "Stopwatch",
      icon: <StopwatchIcon />,
      link: "/react-windows-clock-clone/stopwatch",
    },
    {
      name: "World clock",
      icon: <WorldClockIcon />,
      link: "/react-windows-clock-clone/worldclock",
    },
    /* {
         icon: <AccountIcon />,
      }, */
    {
      name: "Settings",
      icon: <SettingsIcon />,
      link: "/react-windows-clock-clone/settings",
    },
  ];

  const [isOpened, setIsOpened] = useState(false);
  const [burgerAnimating, setBurgerAnimating] = useState(false);
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsOpened(false);
    setWindowHeight(window.innerHeight);
  };
  const toggleSidebar = () => {
    setIsOpened((s) => !s);
  };

  const triggerBurgerAnimation = () => {
    setBurgerAnimating(true);
  };

  return (
    <nav className={styles.sidebarWrapper}>
      {isOpened ? <div className={styles.overlay} onClick={toggleSidebar}></div> : null}

      <div
        className={`${styles.sidebar} ${isOpened ? styles["sidebar--opened"] : ""}`}
        style={{ "--windowHeight": `${windowHeight}px` }}
      >
        {navBtns.map(({ name, icon, link }) => (
          <SidebarListItem key={name}>
            <NavLink
              to={link}
              className={({ isActive }) =>
                `${styles["sidebar__link"]} ${
                  isActive ? styles["sidebar__link--active"] : ""
                }`
              }
              onClick={isOpened ? toggleSidebar : null}
            >
              {icon}
              <span>{name}</span>
            </NavLink>
          </SidebarListItem>
        ))}
      </div>

      <header className={styles.header}>
        <button
          onClick={() => {
            toggleSidebar();
            triggerBurgerAnimation();
          }}
          className={`${styles["sidebar__link"]} ${styles["sidebar__link_burger"]} `}
          onAnimationEnd={() => setBurgerAnimating(false)}
        >
          {
            <BurgerIcon
              className={burgerAnimating ? styles["sidebar__link_burger--animation"] : ""}
            />
          }
        </button>

        <h1 className={styles.globalTitle}>
          <img src={ClockIcon}></img>
          Clock
        </h1>
      </header>
    </nav>
  );
}

export default Sidebar;
