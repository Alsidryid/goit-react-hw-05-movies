import { useEffect, useState } from 'react';
import { getMainMovies } from '../../api/api';
import MovieList from 'components/MovieList/MovieList';
import style from './MainMovies.module.css';
import Loader from 'components/Loader/Loader';
const MainMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMainMovies();
        setMovies(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>{<Loader />}</p>}
      {Boolean(movies.length) && (
        <ul className={style.list}>
          <MovieList movies={movies} />
        </ul>
      )}
    </>
  );
};

export default MainMovies;
