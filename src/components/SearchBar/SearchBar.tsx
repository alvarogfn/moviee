import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [search, setSearch] = React.useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = createSearchParams({ search });
    navigate({ pathname: "/", search: `${params}` });
  }

  return (
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
      <label className={styles.label} htmlFor="search">
        <input
          type="text"
          className={styles.input}
          id="search"
          placeholder="O que você procura?"
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </label>
    </form>
  );
}
