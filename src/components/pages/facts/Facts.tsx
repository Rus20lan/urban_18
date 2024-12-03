import { useEffect, useState } from 'react';
import style from './facts.module.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { getFacts } from '../../../redux/facts/factsSliece';
import Loader from '../../loader/Loader';
import FactCard from '../../factCard/FactCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Error } from '../../error/Error';

function Facts() {
  const dispatch = useAppDispatch();
  const { facts, isError, totalPages, errorMessage, currentPage } =
    useAppSelector((state) => state.facts);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    dispatch(getFacts({ page, pageSize: 18 }));
  }, [page]);

  if (isError) return <Error message={errorMessage} />;

  const loadNext = () => {
    setPage(page + 1);
  };

  return (
    <div className={style.container}>
      <h2>Explore All Facts ...</h2>
      {facts && (
        <InfiniteScroll
          next={loadNext}
          dataLength={facts.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          <div className={style.facts_grid}>
            {facts.map((fact, index) => (
              <FactCard key={index} fact={fact} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default Facts;
