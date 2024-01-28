import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'api/api';
import Loader from 'components/Loader/Loader';
import style from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieCast(id);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (!id) return;
    fetchMovies();
  }, [id]);

  // if (!cast) {
  //   return;
  // }
  const actor = cast.map(({ id, name, profile_path, character }) => {
    return (
      <li className={style.cast_item} key={id}>
        <img
          className={style.cast_image}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
          }
          alt=""
        />
        <div className={style.desc}>
          <h2 className={style.name}>{name}</h2>
          {character ? <p>{character}</p> : <p>?</p>}
        </div>
      </li>
    );
  });
  const isActors = Boolean(cast.length);
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>{<Loader />}</p>}
      {isActors && <ul className={style.cast_list}>{actor}</ul>}
    </>
  );
};

export default Cast;
