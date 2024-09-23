import { RecipeIngredientDto } from "./recipe-ingredient";

export interface RecipeDto {
    id: string;
    label: string;
    publicRecipe: boolean;
    instruction: string;
    duration: number;
    picture: string;
    recipeIngredientsDto: RecipeIngredientDto[];
}