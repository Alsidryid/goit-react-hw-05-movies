import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../api/api';
import { NavLink, Outlet } from 'react-router-dom';
import style from './Movie.module.css';
import Loader from 'components/Loader/Loader';

const Movie = () => {
  const [movie, setMovie] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setloading(false);
        const { data } = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    };
    fetchMovies();
  }, [id]);

  if (!movie) {
    return;
  }

  const genres = movie.genres.map(({ name }) => {
    return <li className={style.genre}>{name}</li>;
  });

  const from = location.state?.from || '/';
  const persent = (movie.vote_average * 10).toFixed(0);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <Loader />}
      <div className={style.box}>
        <button
          className={style.back}
          onClick={() => navigate(from)}
          type="button"
        >
          {' '}
          Go back
        </button>
      </div>
      <div className={style.content}>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : defaultImg
          }
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <p className={style.score}>User score - {persent} %</p>
        <ul className={style.genres}> Genres : {genres}</ul>
        <p className={style.overview}> Overview: {movie.overview}</p>
      </div>
      <div className={style.links}>
        <NavLink className={style.info} to="cast" state={{ from: from }}>
          Cast
        </NavLink>
        <NavLink className={style.info} to="reviews" state={{ from: from }}>
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default Movie;
