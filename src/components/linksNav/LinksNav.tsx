import { Link } from 'react-router-dom';
import './styles.css';
import { Links } from '../../utils/consts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { toggleBurger } from '../../redux/burger/burgerSlice';

const LinksNav = () => {
  const { toggle } = useAppSelector((state) => state.burger);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (toggle) dispatch(toggleBurger());
  };
  return (
    <ul className="links">
      {Object.values(Links)
        .filter((item) => item !== 'bean')
        .map((item, index) => (
          <li className="link" key={index}>
            <Link to={'/urban_18/' + item} onClick={handleClick}>
              {item}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default LinksNav;
