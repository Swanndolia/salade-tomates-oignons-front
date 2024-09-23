export interface AccountDto {
    id: string; // Unique identifier for the account
    username: string; // Username of the account holder
    email: string; // Email address of the account holder
    password: string; // Password for the account
    defaultServing: number; // Default serving size for the account
    avatar?: string; // Optional URL for the account holder's avatar
    vegetarian: boolean; // Indicates if the account holder is vegetarian
    vegan: boolean; // Indicates if the account holder is vegan
    glutenFree: boolean; // Indicates if the account holder is gluten-free
    lactoseFree: boolean; // Indicates if the account holder is lactose-free
    admin: boolean; // Indicates if the account holder has admin privileges
}
