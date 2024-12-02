import style from './history.module.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { useEffect, useState } from 'react';
import { IPageParam } from '../../../interfaces/IPageParam';
import { getHistory } from '../../../redux/history/historySlice';
import RecipeCard from '../../recipeCard/RecipeCard';
import Loader from '../../loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Error } from '../../error/Error';

const History = () => {
  const dispatch = useAppDispatch();
  const { history, isError, errorMessage, currentPage, totalPages } =
    useAppSelector((state) => state.history);
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    const obj: IPageParam = { page };
    dispatch(getHistory(obj));
  }, [page]);

  if (isError) return <Error message={errorMessage} />;

  const loadNext = () => {
    setPage(page + 1);
  };

  return (
    <div className={style.display_history}>
      <h3>Explore History ...</h3>
      {history && (
        <>
          <InfiniteScroll
            next={loadNext}
            dataLength={history.length}
            loader={<Loader />}
            hasMore={page < totalPages}
          >
            <div className={style.history_grid}>
              {history.map((hist, index) => (
                <RecipeCard key={index} history={hist} />
              ))}
            </div>
          </InfiniteScroll>
        </>
      )}
    </div>
  );
};

export default History;
