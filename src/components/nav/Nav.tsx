import { Link } from 'react-router-dom';
import style from './nav.module.css';
import logo from '../../images/logo.png';
import { Links } from '../../utils/consts';

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_wrapper}>
        <Link to="home">
          <img src={logo} alt="Jwlly Belly Wiki"></img>
        </Link>
      </div>
      <ul className={style.links}>
        {Object.values(Links).map((item, index) => (
          <li className={style.link} key={index}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
