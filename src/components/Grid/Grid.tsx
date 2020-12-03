import styles from "./Grid.module.css";
import { GridProps } from "./types";

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className={styles.parent}>{children}</div>;
};
