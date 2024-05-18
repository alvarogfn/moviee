import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <img className={styles.image} src={logo} />
        <h1 className={styles.title}>Moviee</h1>
      </Link>
      <div className={styles.searchbar}>
        <SearchBar />
      </div>
    </header>
  );
}
