import React from "react";
import { omdb } from "../../API";
import { ResumedMovie } from "../../models/ResumedMovie";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../utils/Loading/Loading";
import NotFound from "../utils/NotFound/NotFound";
import styles from "./MovieListSection.module.scss";

interface props {
  title: string;
  movie: string;
}

export default function MovieListSection({ title = "Title", movie }: props) {
  const [movies, setMovies] = React.useState<ResumedMovie[]>([]);
  const [notFound, setNotFound] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const elementRef = React.useRef(null);

  const position = {
    left: 0,
    x: 0,
  };

  function mouseDown(event: any) {
    if (elementRef.current) {
      position.x = event.clientX;
      position.left = (elementRef.current as HTMLElement).scrollLeft;
      (elementRef.current as HTMLElement).style.cursor = "grabbing";
    }

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(event: any) {
    if (elementRef.current) {
      const moveX = event.clientX - position.x;
      (elementRef.current as HTMLElement).scrollLeft = position.left - moveX;
    }
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
    if (elementRef.current)
      (elementRef.current as HTMLElement).style.cursor = "grab";
  }

  React.useEffect(() => {
    setLoading(true);
    omdb
      .name(movie)
      .then((r) => setMovies(r.movies))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <Loading loading={loading} inheritClass={styles.loading}>
        <NotFound error={notFound}>
          <div className={styles.wrapper}>
            <ul
              className={styles.list}
              ref={elementRef}
              onMouseDown={mouseDown}
            >
              {movies.map((movie) => {
                return (
                  <li className={styles.item} key={movie.imdbID}>
                    <MovieCard movie={movie} />
                  </li>
                );
              })}
            </ul>
          </div>
        </NotFound>
      </Loading>
    </section>
  );
}
