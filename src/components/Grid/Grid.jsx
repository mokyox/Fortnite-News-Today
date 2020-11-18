import styles from "./Grid.module.css";

export const Grid = ({ children }) => {
  return <div className={styles.parent}>{children}</div>;
};
