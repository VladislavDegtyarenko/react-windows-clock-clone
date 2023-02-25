import { createContext, useEffect, useContext } from "react";

import AudioContext from "./AudioContext";

const NotificationsContext = createContext(null);

let notification;

export const NotificationsContextProvider = ({ children }) => {
   const audio = useContext(AudioContext);

   const askPermission = () => {
      if (Notification.permission !== "denied") {
         Notification.requestPermission();
      }
   };

   const newNotification = ({ title, text }) => {
      return new Notification(title, {
         body: text,
         requireInteraction: true,
      });
   };

   const show = ({ title, text, soundTitle, loop }) => {
      if (!("Notification" in window)) {
         // Check if the browser supports notifications
         alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
         // Check whether notification permissions have already been granted;
         // if so, create a notification
         notification = newNotification({ title, text });
         soundTitle && audio.play({ soundTitle, loop });
         // …
      } else if (Notification.permission !== "denied") {
         // We need to ask the user for permission
         Notification.requestPermission().then((permission) => {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
               notification = newNotification({ title, text });
               soundTitle && audio.play({ soundTitle, loop });

               // …
            }
         });
      }

      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them anymore.
   };

   useEffect(() => {
      // askPermission();
      if (notification) {
         notification.onclick = () => {
            audio.stop();
            notification = null;
         };

         notification.addEventListener("close", () => {
            audio.stop();
            notification = null;
         });
      }
   }, [notification]);

   const notifications = {
      show,
   };

   return (
      <NotificationsContext.Provider value={notifications}>
         {children}
      </NotificationsContext.Provider>
   );
};

export default NotificationsContext;
