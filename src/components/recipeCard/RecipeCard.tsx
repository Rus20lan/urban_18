import { FC } from 'react';
import style from './recipeCard.module.css';
import { IRecipe } from '../../interfaces/IRecipe';
import { ICombination } from '../../interfaces/ICombination';
import { IHistory } from '../../interfaces/IHistory';

interface Props {
  recipe?: IRecipe;
  combination?: ICombination;
  history?: IHistory;
}

const RecipeCard: FC<Props> = ({ recipe, combination, history }) => {
  return (
    <>
      {recipe && (
        <div className={style.recipe_wrapper}>
          <h4>{recipe.name}</h4>
          <p>{recipe.description}</p>
          <br />
          {recipe.makingAmount && <p>Make: {recipe.makingAmount}</p>}
          {recipe.totalTime && <p>Total Time: {recipe.totalTime}</p>}
        </div>
      )}
      {combination && (
        <div className={style.comb_wrapper}>
          <h4>{combination.name}</h4>
          <p>{combination.tag.join(', ')}</p>
        </div>
      )}
      {history && (
        <div className={style.history_wrapper}>
          <div>
            <h4>{history.year}</h4>
            <p>{history.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;
