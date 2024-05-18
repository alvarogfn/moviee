import React from "react";
import { useSearchParams } from "react-router-dom";
import MovieListSection from "../../components/MovieListSection/MovieListSection";
import MovieSearchSection from "../../components/MovieSearchSection/MovieSearchSection";
import styles from "./MovieList.module.scss";

export default function MovieList() {
  const [params] = useSearchParams();
  const [search, setSearch] = React.useState<string | null>(null);

  React.useEffect(() => {
    setSearch(params.get("search"));
    console.log(params);
  }, [params]);

  return (
    <main className={styles.movies}>
      {search !== null ? (
        <MovieSearchSection search={search} />
      ) : (
        <>
          <MovieListSection title="Naruto Movies & Series" movie="Naruto" />
          <MovieListSection
            title="Sword Art Online Series"
            movie="Sword Art Online"
          />
          <MovieListSection
            title="Hunter X Hunter Series"
            movie="Hunter X Hunter"
          />
        </>
      )}
    </main>
  );
}
