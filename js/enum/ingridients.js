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
  FERRIT: {
    name: "Ferrite Dust",
    icon: "ferrite.webp"
  },
  FERRIT_M: {
    name: "Magnetised Ferrite",
    icon: "magnetised_ferrite.webp"
  },
  FERRIT_P: {
    name: "Pure Ferrite",
    icon: "pure_ferrite.webp"
  },
  CHROMATIC_METAL: {
    name: "Chromatic Metal",
    icon: "chromatic_metal.webp"
  },
  SODIUM: {
    name: "Sodium",
    icon: "sodium.webp"
  },
  CARBON_NANOTUBES: {
    name: "Carbon Nanotubes",
    icon: "carbon_nanotubes.webp"
  },
  METAL_PLATING: {
    name: "Metal Plating",
    icon: "metail_plating.webp"
  },
  /**
   * Get url of the icon for the ingridient.
   *
   * @param ingridient - javascript object of the ingridient.
   */
  getIconUrl: (ingridient) => {
    return "./images/ingridients/" + ingridient.icon;s
  },
  /**
   * Get uid of the building.
   *
   * @param ingridient - javascript object of the ingridients.
   */
  getUid: (ingridient) => {
    return ingridient.name.replaceAll(" ", "_");
  }
}
