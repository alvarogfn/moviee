import React from "react";
import styles from "./Loading.module.scss";

interface props {
  loading: boolean;
  children: React.ReactNode;
  inheritClass?: string;
}

export default function Loading({ loading, children, inheritClass }: props) {
  return (
    <>
      {loading ? (
        <div className={`${styles.container} ${inheritClass}`}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
