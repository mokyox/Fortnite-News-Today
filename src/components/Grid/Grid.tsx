import styles from "./Grid.module.css";
import { GridProps } from "./types";

export const Grid = ({ children }: GridProps) => {
  return <div className={styles.parent}>{children}</div>;
};
