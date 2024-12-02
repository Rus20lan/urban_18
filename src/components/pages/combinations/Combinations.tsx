import style from './comb.module.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import RecipeCard from '../../recipeCard/RecipeCard';
import { getCombinations } from '../../../redux/combinations/combinationsSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../loader/Loader';
import { Error } from '../../error/Error';

const Combinations = () => {
  const dispatch = useAppDispatch();
  const { combinations, isError, errorMessage, currentPage, totalPages } =
    useAppSelector((state) => state.combinations);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    dispatch(getCombinations({ page }));
    return () => {};
  }, [page]);

  const loadNext = () => {
    setPage(page + 1);
  };

  if (isError) return <Error message={errorMessage} />;

  return (
    <div className={style.container}>
      <h3 className={style.title_h3}>Explore Combinations ...</h3>
      {combinations && (
        <InfiniteScroll
          next={loadNext}
          dataLength={combinations.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          <div className={style.comb_grid}>
            {combinations.map((comb, index) => (
              <RecipeCard key={index} combination={comb} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Combinations;

{
  /* <img
              className={style.happy_bean}
              src={happy}
              alt="happy bean"
            ></img> */
}
