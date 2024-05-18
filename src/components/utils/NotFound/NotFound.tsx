import React from "react";
import styles from "./NotFound.module.scss";

interface props {
  error: boolean;
  children: React.ReactNode;
  inheritClass?: string;
}

export default function NotFound({ error, children, inheritClass }: props) {
  return (
    <>
      {error ? (
        <section className={`${inheritClass}${styles.container}`}>
          <h1 className={styles.title}>Error </h1>
          <p className={styles.paragraph}>Search returned no results</p>
        </section>
      ) : (
        children
      )}
    </>
  );
}
