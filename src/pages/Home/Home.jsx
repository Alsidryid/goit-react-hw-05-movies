import MainMovies from 'components/MainMovies/MainMovies';
import style from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h1 className={style.title}>Home</h1>
      <MainMovies />
    </div>
  );
};

export default Home;
