import { AccountDto } from "./account";
import { IngredientDto } from "./ingredient";

export interface AccountIngredientDto {
  id: number; // AccountIngredientId
  quantity: number[]; // Assuming quantity is an array of numbers
  account: AccountDto; // Assuming Account is defined elsewhere
  ingredient: IngredientDto; // Assuming Ingredient is defined elsewhere
}
