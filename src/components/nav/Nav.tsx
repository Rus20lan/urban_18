import { Link } from 'react-router-dom';
import style from './nav.module.css';
import logo from '../../images/logo.png';

import BurgerBtn from '../burgerBtn/BurgerBtn';
import { useResize } from '../../redux/hooks/useResize';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import LinksNav from '../linksNav/LinksNav';
import { toggleBurger } from '../../redux/burger/burgerSlice';

const Nav = () => {
  const { isScreenLG } = useResize();
  const dispatch = useAppDispatch();
  const { toggle } = useAppSelector((state) => state.burger);

  if (!isScreenLG && toggle) {
    dispatch(toggleBurger());
  }

  return (
    <div className={style.container}>
      <div className={style.logo_wrapper}>
        <Link to="/urban_18/">
          <img src={logo} alt="Jwlly Belly Wiki"></img>
        </Link>
      </div>
      {!isScreenLG && <LinksNav />}
      {isScreenLG && <BurgerBtn />}
      {toggle && isScreenLG && <BurgerMenu />}
    </div>
  );
};

export default Nav;
