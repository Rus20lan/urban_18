import style from './greeting.module.css';
import animBeans from '../../images/animation-pinks.gif';
import { Links } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { useResize } from '../../redux/hooks/useResize';

const Greeting = () => {
  const navigate = useNavigate();
  const { isScreenMd } = useResize();

  const handleClick = () => {
    navigate(`/urban_18/${Links.ABOUT}`);
  };

  return (
    <div className="display_greeting">
      <div className={style.container}>
        <img src={animBeans} alt="Jelly Belly Wiki Logo"></img>
        {/* <div className={style.img_wrapper}>
          
        </div> */}
        <div className={style.text_wrapper}>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h3>A Rainbow of Flavors Awaits!</h3>
          {!isScreenMd && (
            <p>
              The User Interface of this website makes full use of the API's
              database, showcasing one approach to design by utilizing all the
              endpoints and their various options. Check out the API
              documentation
            </p>
          )}
          <a
            className={style.btn}
            onClick={handleClick}
            style={isScreenMd ? { fontSize: '1rem' } : {}}
          >
            Click here for more info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
