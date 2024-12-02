import { FC } from 'react';
import IFact from '../../interfaces/IFact';
import style from './factCard.module.css';

type Props = {
  fact: IFact;
};

const FactCard: FC<Props> = ({ fact }) => {
  return (
    <div className={style.wrapper_card}>
      <h4>{`${fact.factId}. ${fact.title}`}</h4>
      <p>{fact.description}</p>
    </div>
  );
};

export default FactCard;
