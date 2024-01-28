import { Link, useLocation } from 'react-router-dom';
import style from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return movies.map(({ id, title, poster_path }) => {
    return (
      <li className={style.item}>
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          className={style.link}
          key={id}
        >
          <img
            className={style.img}
            src={
              Boolean(poster_path)
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaultImg
            }
            alt={title}
          />
          <h3 className={style.title}>{title}</h3>
        </Link>
      </li>
    );
  });
};

export default MovieList;
