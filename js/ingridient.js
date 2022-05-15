const Ingridient = {
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
  /**
   * List of ingridients available for crafting.
   */
  list: {
    CARBON: {
      name: "Carbon",
      icon: "carbon.webp"
    },
    MICROCHIP: {
      name: "Microprocessor",
      icon: "microprocessor.webp"
    },
    GLASS: {
      name: "Glass",
      icon: "glass.webp"
    },
    FERRIT_M: {
      name: "Magnetised Ferrite",
      icon: "magnetised_ferrite.webp"
    }
  }
}
