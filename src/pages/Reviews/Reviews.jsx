import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/api';
import Loader from 'components/Loader/Loader';
import style from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieReviews(id);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (!id) return;
    fetchMovies();
  }, [id]);

  const review = reviews.map(({ id, author, content }) => {
    return (
      <li className={style.item} key={id}>
        <h2 className={style.title}>{author}</h2>
        <p className={style.post}>{content}</p>
      </li>
    );
  });

  const isReview = Boolean(reviews.length);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>{<Loader />}</p>}
      {isReview ? <ul className={style.list}>{review}</ul> : <p>No reviews</p>}
    </>
  );
};

export default Reviews;
