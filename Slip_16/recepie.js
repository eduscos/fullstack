// recipeBook.js
const recipes = [
    { name: "Pasta", ingredients: ["noodles", "sauce", "cheese"] },
    { name: "Poha", ingredients: ["rice flakes", "onion", "mustard seeds"] }
  ];
  
  recipes.forEach(recipe => {
    console.log(`Recipe: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(", ")}\n`);
  });
  