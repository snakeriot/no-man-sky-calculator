/**
 * List of buildings.
 */
const Buildings = {
  TIMBER_WALL: {
    name: "Timber Wall",
    icon: "tibmer_basic_wall.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      count: 25
    }]
  },
  TIMBER_WALL_LARGE_WINDLOW: {
    name: "Extruded Timber Large Window",
    icon: "timber_extruded_window_wall.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      count: 25
    }, {
      ingridient: Ingridients.GLASS,
      count: 1
    }]
  },
  TRADE_TERMINAL: {
    name: "Galactic Trade Terminal",
    icon: "trade_terminal.webp",
    cathegory: MenuItems.EQUIPMENT.children.PERMANENT,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      count: 25
    }, {
      ingridient: Ingridients.MICROCHIP,
      count: 3
    }]
  }
}
