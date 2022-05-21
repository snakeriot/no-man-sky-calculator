/**
 * List of buildings.
 */
const Ingridients = {
  CARBON: {
    name: "Carbon",
    icon: "carbon.webp",
    ordinal: 1
  },
  CARBON_C: {
    name: "Condensed Carbon",
    icon: "condensed_carbon.webp",
    ordinal: 2
  },
  CARBON_NANOTUBES: {
    name: "Carbon Nanotubes",
    icon: "carbon_nanotubes.webp",
    ordinal: 4
  },
  FERRIT: {
    name: "Ferrite Dust",
    icon: "ferrite.webp",
    ordinal: 10
  },
  FERRIT_P: {
    name: "Pure Ferrite",
    icon: "pure_ferrite.webp",
    ordinal: 11
  },
  FERRIT_M: {
    name: "Magnetised Ferrite",
    icon: "magnetised_ferrite.webp",
    ordinal: 12
  },
  METAL_PLATING: {
    name: "Metal Plating",
    icon: "metail_plating.webp",
    ordinal: 13
  },
  SODIUM: {
    name: "Sodium",
    icon: "sodium.webp",
    ordinal: 20
  },
  GOLD: {
    name: "Gold",
    icon: "gold.webp",
    ordinal: 40
  },
  SILVER: {
    name: "Silver",
    icon: "silver.webp",
    ordinal: 41
  },
  TRITIUM: {
    name: "Tritium",
    icon: "tritium.webp",
    ordinal: 42
  },
  CHROMATIC_METAL: {
    name: "Chromatic Metal",
    icon: "chromatic_metal.webp",
    ordinal: 49
  },
  LIVING_PEARL: {
    name: "Living Pearl",
    icon: "living_peral.webp",
    ordinal: 50
  },
  CRYSTAL_SULPHIDE: {
    name: "Crystal Sulphide",
    icon: "crystal_sulphide.webp",
    ordinal: 51
  },
  MICROCHIP: {
    name: "Microprocessor",
    icon: "microprocessor.webp",
    ordinal: 999
  },
  GLASS: {
    name: "Glass",
    icon: "glass.webp",
    ordinal: 999
  },
  ION_BATTERY: {
    name: "Ion Battery",
    icon: "ion_battery.webp",
    ordinal: 999
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
