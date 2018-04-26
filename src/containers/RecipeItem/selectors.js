export const selectModalState = () => state => state.recipeItem;
export const selectFormTitle = () => state => state.recipeItem.activeTitle;
export const selectFormIngridients = () => state => state.recipeItem.activeIngridients;
export const selectFormId = () => state => state.recipeItem.activeId;
