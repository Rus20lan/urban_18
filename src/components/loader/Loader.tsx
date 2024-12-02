import style from './loader.module.css';
const Loader = () => {
  return (
    <div className={style.container}>
      <h1 className={style.loader_h1}>Loading...</h1>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loader;
