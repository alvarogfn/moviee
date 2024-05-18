import React from "react";
import { ExpandedMovie } from "../../models/ExpandedMovie";
import styles from "./ExpandedMovieCard.module.scss";
interface props {
  movie: ExpandedMovie;
}

export default function ExpandedMovieCard({ movie }: props) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{movie.Title}</h1>
      <p className={styles.plot}>{movie.Plot}</p>
      <p className={styles.yearGenre}>
        <span className={styles.year}>{movie.Year}</span>&#9672;
        <span className={styles.genre}>{movie.Genre}</span>
      </p>
      <p className={styles.rated}>{movie.Rated}</p>
      <p className={styles.released}>{movie.Released}</p>
      <p className={styles.runtime}>
        <span>Duration: </span>
        {movie.Runtime}
      </p>
      <p className={styles.writer}>{movie.Writer}</p>
      <p className={styles.language}>
        <span>Languages: </span>
        {movie.Language}.
      </p>
      <p className={styles.awards}>{movie.Awards}</p>
      <p className={styles.imdbRate}>
        {movie.imdbRating}
        <span className={styles.imdbRateTotal}>/10</span>
      </p>
      <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
    </section>
  );
}
