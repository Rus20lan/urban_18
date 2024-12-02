import { FC } from 'react';
import './style.css';
import happy from '../../images/happy_bean.png';

type Props = {
  message: string;
};
export const Error: FC<Props> = ({ message }) => {
  return (
    <div className="error_wrapper">
      <h3>{message}</h3>
      <img className="happy_bean" src={happy} alt="happy bean"></img>
    </div>
  );
};
