export interface IRecipe {
  recipeId: number;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  additions1: string[];
  additions2: string[];
  additions3: string[];
  directions: string[];
  imageUrl: string[];
  ingredients: string[];
  makingAmount: string;
  tips: string[];
  totalTime: string;
}
