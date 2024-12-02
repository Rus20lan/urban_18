import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import style from './bean.module.css';
import { Link, useParams } from 'react-router-dom';
import { getBeanById } from '../../../redux/bean/beanSlice';
import { Links } from '../../../utils/consts';
import arrow from '../../../images/arrow.svg';
import Loader from '../../loader/Loader';
import { Error } from '../../error/Error';

const Bean = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { bean, isLoading, isError, errorMessage } = useAppSelector(
    (state) => state.bean
  );
  useEffect(() => {
    dispatch(getBeanById(+id!));
  }, [id]);

  if (isLoading) return <Loader />;
  if (isError) return <Error message={errorMessage} />;
  return (
    <div className={style.container}>
      <div className={style.bean_card}>
        <div className={`${style.title_wrapper} ${style.centered}`}>
          <h3>{bean?.flavorName}</h3>
        </div>
        <div className={`${style.title_wrapper} ${style.centered}`}>
          <p></p>
        </div>
        <div className={style.img_wrapper}>
          <img src={bean?.imageUrl} alt=""></img>
        </div>
        <div className={style.title_wrapper}>
          <p>
            <strong>Group Name:</strong>
          </p>
          <p>{bean?.groupName.join(', ')}</p>
        </div>
        <div className={style.title_wrapper}>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <p>{bean?.ingredients.join(', ')}</p>
        </div>
        <div className={style.grid_wrapper}>
          <div className={style.title_wrapper}>
            <p>
              <strong>Color Group:</strong>
            </p>
            <p>{bean?.colorGroup}</p>
          </div>
          <div className={style.title_wrapper}>
            <p>
              <strong>Hexadecimal Color:</strong>
            </p>
            <div
              className={style.beanBg}
              style={{ background: bean?.backgroundColor }}
            >
              {bean?.backgroundColor}
            </div>
          </div>
          <div className={style.title_wrapper}>
            <p>
              <strong>Bean ID:</strong>
            </p>
            <p>{bean?.beanId}</p>
          </div>
          <div className={style.title_wrapper}>
            <p>
              <strong>Kosher: </strong>
            </p>
            <p>{bean?.kosher ? 'yes' : 'no'}</p>
          </div>
          <div className={style.title_wrapper}>
            <p>
              <strong>Seasonal:</strong>
            </p>
            <p>{bean?.seasonal ? 'yes' : 'no'}</p>
          </div>
          <div className={style.title_wrapper}>
            <p>
              <strong>Gluten Free: </strong>
            </p>
            <p>{bean?.glutenFree ? 'yes' : 'no'}</p>
          </div>
          <div className={style.title_wrapper}>
            <p>
              <strong>Sugar Free: </strong>
            </p>
            <p>{bean?.sugarFree ? 'yes' : 'no'}</p>
          </div>
        </div>
        <Link to={'/' + Links.BEANS}>
          Back to Beans <img className={style.arrow} src={arrow}></img>
        </Link>
      </div>
    </div>
  );
};

export default Bean;
