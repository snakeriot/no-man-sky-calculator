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
      number: 25
    }]
  },
  TIMBER_FLOOR: {
    name: "Timber Floor",
    icon: "tibmer_basic_floor.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 10
    }]
  },
  TIMBER_RECTANGULAR_DOOR: {
    name: "Timber Rectangular Door",
    icon: "tibmer_rectangular_door.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    },
    {
      ingridient: Ingridients.FERRIT_P,
      number: 10
    }]
  },
  LARGE_TIMBER_TRIPPLE_WINDOW: {
    name: "Large Timber Triple Window",
    icon: "large_timber_triple_window.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    },
    {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  TIMBER_WALL_LARGE_WINDLOW: {
    name: "Extruded Timber Large Window",
    icon: "timber_extruded_window_wall.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  TIMBER_FRAMED_GLASS_PANEL: {
    name: "Timber-Framed Glass Panel",
    icon: "timber_framed_glass_panel.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 10
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  TIMBER_RAMP: {
    name: "Timber Ramp",
    icon: "timber_ramp.webp",
    cathegory: MenuItems.BASIC_COMPONENTS.children.TIMBER,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 35
    }, {
      ingridient: Ingridients.FERRIT,
      number: 10
    }]
  },
  TRADE_TERMINAL: {
    name: "Galactic Trade Terminal",
    icon: "trade_terminal.webp",
    cathegory: MenuItems.EQUIPMENT.children.PERMANENT,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      number: 25
    }, {
      ingridient: Ingridients.MICROCHIP,
      number: 3
    }]
  },
  BASE_COMPUTER: {
    name: "Base Computer",
    icon: "base_computer.webp",
    cathegory: MenuItems.EQUIPMENT.children.PORTABLE,
    recipe: [{
      ingridient: Ingridients.CHROMATIC_METAL,
      number: 30
    }]
  },
  BASE_TELEPORT: {
    name: "Base Teleport Module",
    icon: "base_teleport.webp",
    cathegory: MenuItems.EQUIPMENT.children.PERMANENT,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 4
    }, {
      ingridient: Ingridients.CARBON_NANOTUBES,
      number: 2
    }, {
      ingridient: Ingridients.SODIUM,
      number: 40
    }]
  },
  /**
   * Get list of buildings by search criteria.
   *
   * @param criteria object that should have following fields: property, value.
   * @return array of buildings.
   */
  find: (criteria) => {
    const property = criteria.property;
    const value = criteria.value;

    if (property === "cathegory") {
      return Buildings.findByMenuItem(value);
    } else if (property === "name") {
      return Buildings.findByName(value);
    }
    return [];
  },
  /**
   * Get list of buildings by name.
   *
   * @param name string.
   * @return array of buildings.
   */
  findByName: (name) => {
    const buildings = [];
    const array = EnumUtil.toArray(Buildings);

    for (let inex in array) {
      const building = array[inex];

      if (building.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        buildings.push(building);
      }
    }
    return buildings;
  },
  /**
   * Get list of buildings that belongs to the menu item.
   *
   * @param item selected menu item.
   * @return array of buildings.
   */
  findByMenuItem: (item) => {
    const cathegories = [];

    if (!item) {
      return cathegories;
    }
    if (item.children) {
      for (let childIndex in item.children) {
        cathegories.push(item.children[childIndex]);
      }
    } else {
      cathegories.push(item.name);
    }
    const buildings = [];
    const array = EnumUtil.toArray(Buildings);

    for (let inex in array) {
      const building = array[inex];

      if (cathegories.indexOf(building.cathegory) > -1) {
        buildings.push(building);
      }
    }
    return buildings;
  },
  /**
   * Get uid of the building.
   *
   * @param building - javascript object of the building.
   */
  getUid: (building) => {
    return building.name.replaceAll(" ", "_");
  },
  /**
   * Get url of the icon for the building.
   *
   * @param building - javascript object of the building.
   */
  getIconUrl: (building) => {
    return "./images/buildings/" + building.icon;;
  }
}
