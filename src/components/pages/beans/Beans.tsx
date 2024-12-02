import { useEffect, useState } from 'react';
import { getBeans } from '../../../redux/bean/beansSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import BeanCard from '../../beanCard/BeanCard';
import Loader from '../../loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IBean } from '../../../interfaces/IBean';
import { Error } from '../../error/Error';
import './styles.css';

const Beans = () => {
  const dispatch = useAppDispatch();
  const { beans, totalPages, isError, errorMessage, currentPage } =
    useAppSelector((state) => state.beans);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    dispatch(getBeans({ page }));
  }, [page]);

  const loadNext = () => {
    setPage(page + 1);
  };

  if (isError) return <Error message={errorMessage} />;

  return (
    <div className="display_beans">
      <div className="beans_container">
        <h3 className="title_h3">Explore All Beans ...</h3>

        {beans && (
          <InfiniteScroll
            next={loadNext}
            dataLength={beans.length}
            loader={<Loader />}
            hasMore={page < totalPages}
          >
            {beans &&
              beans.map((bean: IBean, index) => (
                <BeanCard key={`${bean.beanId}` + `${index}`} bean={bean} />
              ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Beans;
