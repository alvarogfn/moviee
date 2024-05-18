import React from "react";
import { useParams } from "react-router-dom";
import { omdb } from "../../API";
import ExpandedMovieCard from "../../components/ExpandedMovieCard/ExpandedMovieCard";
import Loading from "../../components/utils/Loading/Loading";
import { ExpandedMovie } from "../../models/ExpandedMovie";
import styles from "./MovieDetails.module.scss";

export default function MovieDetails() {
  const [movie, setMovie] = React.useState<ExpandedMovie | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const params = useParams();

  React.useEffect(() => {
    const id = params.id as string;
    setLoading(true);
    omdb
      .id(id)
      .then((r) => setMovie(r))
      .finally(() => setLoading(false));
  }, [params]);

  return (
    <main className={styles.container}>
      <Loading loading={loading} inheritClass={styles.loading}>
        {movie && <ExpandedMovieCard movie={movie} />}
      </Loading>
    </main>
  );
}
