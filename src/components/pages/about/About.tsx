import style from './about.module.css';
import arrow from '../../../images/arrow.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div>
          <h3>What to find in this API?</h3>
          <hr />
          <div className={style.info_numbers}>
            <div>
              <h3 className={style.info_numbers_h3}>100 +</h3>
              <p>Jelly belly beans</p>
            </div>
            <div>
              <h3 className={style.info_numbers_h3}>8</h3>
              <p>Properties on each bean</p>
            </div>
            <div>
              <h3 className={style.info_numbers_h3}>99 +</h3>
              <p>Facts on Jelly Belly</p>
            </div>
            <div>
              <h3 className={style.info_numbers_h3}>20 +</h3>
              <p>Milestones in the Jelly Belly History</p>
            </div>
            <div>
              <h3 className={style.info_numbers_h3}>25 +</h3>
              <p>Recipes</p>
            </div>
            <div>
              <h3 className={style.info_numbers_h3}>50 +</h3>
              <p>Jelly Belly Combinations</p>
            </div>
          </div>
        </div>
        <div className={style.info_numbers_last}>
          All data reflecting from the original
          <a href="http://www.jellybelly.com">
            Jelly Belly Website
            <img src={arrow}></img>
          </a>
          <ul className={style.about_ul}>
            <h3>Check out all endpoints</h3>
            {[
              'beans',
              'recipes',
              'facts',
              'combinations',
              'history',
              'review',
            ].map((item, index) => (
              <li className={style.link} key={index}>
                <Link to={'/' + item}>
                  {item} <img src={arrow}></img>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
