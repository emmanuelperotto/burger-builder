export const removeIngredients = (ingredients, label) => {
  const newIngredients = [...ingredients];
  const index = newIngredients.lastIndexOf(label);

  if (index !== -1) {
    newIngredients.splice(index, 1);
  }

  return newIngredients;
};