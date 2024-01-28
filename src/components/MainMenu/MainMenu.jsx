import { NavLink } from 'react-router-dom';
import style from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink className={style.link} to="/">
          home
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink className={style.link} to="/movies">
          movies
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
