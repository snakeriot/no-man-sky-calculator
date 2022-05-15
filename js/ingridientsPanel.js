const IngridientsPanel = {
  toBuild: [],
  /**
   * Add building to to build list.
   *
   * @param biolding javascript object of the building to render.
   */
  addBuilding: (building) => {

  },
  /**
   * Remove building from to build list.
   *
   * @param biolding javascript object of the building to render.
   */
  removeBuilding: (building) => {

  },
  /**
   * Get url of the icon for the ingridient.
   *
   * @param ingridient - javascript object of the ingridient.
   */
  getIconUrl: (ingridient) => {
    return "./images/ingridients/" + ingridient.icon;
  }
}
