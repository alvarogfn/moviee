import React from "react";
import { Link } from "react-router-dom";
import { ResumedMovie } from "../../models/ResumedMovie";
import styles from "./MovieCard.module.scss";

interface props {
  movie: ResumedMovie;
}

export default function MovieCard({ movie }: props) {
  return (
    <Link to={`movie/${movie.imdbID}`}>
      <section className={styles.card}>
        <img className={styles.img} src={movie.Poster} />
        <h1 className={styles.title}>{movie.Title}</h1>
        <p className={styles.year}>{movie.Year}</p>
      </section>
    </Link>
  );
}
