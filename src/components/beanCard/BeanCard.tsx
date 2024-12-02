import { Link } from 'react-router-dom';
import style from './beanCard.module.css';
import { IBean } from '../../interfaces/IBean';
import { FC } from 'react';

type Props = {
  bean: IBean;
};

const BeanCard: FC<Props> = ({ bean }) => {
  return (
    <div
      className={style.bean_card_wrapper}
      style={{ background: `${bean.backgroundColor}` }}
    >
      <Link to={`/urban_18/beans/${bean.beanId}`}>
        <h4 className={style.bean_card_title}>{bean.flavorName}</h4>
      </Link>
      <img src={bean.imageUrl}></img>
      <p>{bean.description}</p>
    </div>
  );
};

export default BeanCard;
