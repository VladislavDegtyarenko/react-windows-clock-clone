// Fluent UI Components
import { Button } from "@fluentui/react-components";

import styles from "./CustomButton.module.css";

function CustomButton({
   children,
   onClick,
   icon,
   appearance,
   shape,
   size,
   refs,
   className,
   disabled,
   onMouseDown,
   onTouchStart,
   onContextMenu,
}) {
   return (
      <Button
         onClick={onClick}
         onMouseDown={onMouseDown}
         onTouchStart={onTouchStart}
         onContextMenu={onContextMenu}
         icon={icon}
         appearance={appearance}
         shape={shape}
         size={size}
         disabled={disabled}
         ref={refs}
         className={`${styles.customButton} ${className}`}
      >
         {children}
      </Button>
   );
}

export default CustomButton;
