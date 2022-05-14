const Building = {
  /**
   * List of buildings available for the crafting.
   */
  list: {
    TIMBER_WALL: {
      name: "Timber Wall",
      icon: "tibmer_basic_wall.webp",
      cathegory: Menu.list.BASIC_COMPONENTS.TIMBER,
      recipe: [{
        ingridient: Ingridient.list.CARBON,
        count: 25
      }]
    },
    TIMBER_WALL_LARGE_WINDLOW: {
      name: "Extruded Timber Large Window",
      icon: "timber_extruded_window_wall.webp",
      cathegory: Menu.list.BASIC_COMPONENTS.TIMBER,
      recipe: [{
        ingridient: Ingridient.list.CARBON,
        count: 25
      }, {
        ingridient: Ingridient.list.GLASS,
        count: 1
      }]
    },
    TRADE_TERMINAL: {
      name: "Galactic Trade Terminal",
      icon: "trade_terminal.webp",
      cathegory: Menu.list.EQUIPMENT.PERMANENT,
      recipe: [{
        ingridient: Ingridient.list.FERRIT_M,
        count: 25
      }, {
        ingridient: Ingridient.list.MICROCHIP,
        count: 3
      }]
    }
  }
}
