import styles from "./Sidebar.module.css";

function SidebarListItem({ children }) {
   return <li className={styles["sidebar__list-item"]}>{children}</li>;
}

export default SidebarListItem;
