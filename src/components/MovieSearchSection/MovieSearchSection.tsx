import React from "react";
import { omdb } from "../../API";
import { ResumedMovie } from "../../models/ResumedMovie";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../utils/Loading/Loading";
import NotFound from "../utils/NotFound/NotFound";
import styles from "./MovieSearchSection.module.scss";

interface props {
  search: string;
}

export default function MovieSearchSection({ search }: props) {
  const [movies, setMovies] = React.useState<ResumedMovie[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [notFound, setNotFound] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    omdb
      .name(search)
      .then((r) => setMovies(r.movies))
      .then(() => setNotFound(false))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [search, omdb, setLoading, setMovies]);

  return (
    <main className={styles.container}>
      <Loading loading={loading}>
        <NotFound error={notFound}>
          <ul className={styles.list}>
            {movies.map((movie) => {
              return (
                <li className={styles.item} key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </li>
              );
            })}
          </ul>
        </NotFound>
      </Loading>
    </main>
  );
}
