export interface IngredientDto {
    id: string;
    label: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    lactoseFree: boolean;
    calorie: number;
    animalId: string;
    animalLabel: string;
    unitId: string;
    unitLabel: string;
    quantity: number;
  }