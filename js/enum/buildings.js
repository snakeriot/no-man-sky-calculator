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
