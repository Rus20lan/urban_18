import { Link } from 'react-router-dom';
import style from './nav.module.css';
import logo from '../../images/logo.png';
import { Links } from '../../utils/consts';

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_wrapper}>
        <Link to="/urban_18/">
          <img src={logo} alt="Jwlly Belly Wiki"></img>
        </Link>
      </div>
      <ul className={style.links}>
        {Object.values(Links)
          .filter((item) => item !== 'bean')
          .map((item, index) => (
            <li className={style.link} key={index}>
              <Link to={'/urban_18/' + item}>{item}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Nav;
