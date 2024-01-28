import { useEffect, useState } from 'react';
import style from './SearchMovies.module.css';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import { getMovieByKeyword } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';

const SearchMovie = () => {
  //   const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  //   const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieByKeyword(search, page);
        setMovies(prevMovies =>
          prevMovies !== data.results ? [...data.results] : []
        );
        setTotal(data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchMovies();
    }
  }, [search, page]);

  let lastSearch = search;
  const handleSearch = ({ search }) => {
    if (search === lastSearch) {
      Notify.warning('Enter new serch');
      return;
    }
    setSearchParams({ search, page: 1 });
    setTotal(0);
    setMovies([]);
  };
  const loadLess = () => setSearchParams({ search, page: Number(page) - 1 });
  const loadMore = () => setSearchParams({ search, page: Number(page) + 1 });

  const isImages = Boolean(movies.length);
  const isTotal = total > page;

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {error && <p> {error}, please try later.</p>}
      {loading && <Loader />}

      <ul className={style.list}>
        <MovieList movies={movies} />
      </ul>
      <ul className={style.btns}>
        <li className={style.btn}>
          {isImages && Number(page) > 1 && (
            <Button onClick={loadLess} type=" button">
              previos
            </Button>
          )}
        </li>
        <li className={style.btn}>
          {isImages && isTotal && (
            <Button onClick={loadMore} type=" button">
              next
            </Button>
          )}
        </li>
      </ul>
    </>
  );
};

export default SearchMovie;
