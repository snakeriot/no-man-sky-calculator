/**
 * List of buildings.
 */
const Ingridients = {
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
