import { toggleBurger } from '../../redux/burger/burgerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import './style.css';

const BurgerBtn = () => {
  const dispatch = useAppDispatch();
  const { toggle } = useAppSelector((state) => state.burger);

  const handleClick = () => {
    dispatch(toggleBurger());
  };

  return (
    <div
      className={'menu' + ' ' + (toggle ? 'open' : '')}
      onClick={handleClick}
    >
      <div
        className="line"
        style={
          toggle
            ? { backgroundColor: 'var(--light-body-color)' }
            : { backgroundColor: 'var(--dark-red)' }
        }
      ></div>
      <div
        className="line"
        style={
          toggle
            ? { backgroundColor: 'var(--light-body-color)' }
            : { backgroundColor: 'var(--dark-red)' }
        }
      ></div>
      <div
        className="line"
        style={
          toggle
            ? { backgroundColor: 'var(--light-body-color)' }
            : { backgroundColor: 'var(--dark-red)' }
        }
      ></div>
    </div>
  );
};

export default BurgerBtn;
