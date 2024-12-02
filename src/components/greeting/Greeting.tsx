import style from './greeting.module.css';
import animBeans from '../../images/animation-pinks.gif';
import { Links } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

const Greeting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/urban_18/${Links.ABOUT}`);
  };
  return (
    <div className={style.container}>
      <div className={style.img_wrapper}>
        <img src={animBeans} alt="Jelly Belly Wiki Logo"></img>
      </div>
      <div className={style.text_wrapper}>
        <h1>Welcome to the World of Jelly Belly:</h1>
        <h3>A Rainbow of Flavors Awaits!</h3>
        <p>
          The User Interface of this website makes full use of the API's
          database, showcasing one approach to design by utilizing all the
          endpoints and their various options. Check out the API documentation
        </p>
        <a className={style.btn} onClick={handleClick}>
          Click here for more info
        </a>
      </div>
    </div>
  );
};

export default Greeting;
