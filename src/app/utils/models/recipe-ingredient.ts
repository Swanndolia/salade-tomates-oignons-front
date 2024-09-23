import { IngredientDto } from "./ingredient";
export interface RecipeIngredientDto {
        quantity: number;
        consumed: boolean;
        ingredientDto: IngredientDto;
}