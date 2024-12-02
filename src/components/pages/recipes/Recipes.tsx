import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { IPageParam } from '../../../interfaces/IPageParam';
import { getRecipes } from '../../../redux/recipes/recipesSlice';
import style from './recipes.module.css';
import Loader from '../../loader/Loader';
import RecipeCard from '../../recipeCard/RecipeCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Error } from '../../error/Error';

const Recipes = () => {
  const dispatch = useAppDispatch();
  const { recipes, errorMessage, isError, currentPage, totalPages } =
    useAppSelector((state) => state.recipes);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const obj: IPageParam = { page };
    dispatch(getRecipes(obj));
  }, [page]);

  const loadNext = () => {
    setPage(page + 1);
  };

  if (isError) return <Error message={errorMessage} />;

  return (
    <div className={style.container}>
      <h2 className={style.title_h2}>Explore Recipes ...</h2>
      {recipes && (
        <InfiniteScroll
          next={loadNext}
          dataLength={recipes.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          <div className={style.recipes_grid}>
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Recipes;
