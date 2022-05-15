const Building = {
  /**
   * Render list of the buildings based on the search criteria.
   */
  renderList: (criteria) => {
    const buildings = Building.find(criteria);
    const $buildings = document.getElementById("building-list");
    $buildings.innerHTML = "";

    for (let buildingInex in buildings) {

      Building.render($buildings, buildings[buildingInex]);
    }
  },
  /**
   * Render single building.
   *
   * @param $buildings document.element object of the wrapper to which building will be attached.
   * @param biolding javascript object of the building to render.
   */
  render: ($buildings, building) => {
      const $building = document.createElement("div");
      $building.classList.add("building");
      const $icon = document.createElement("img");
      $icon.src = "./images/buildings/" + building.icon;
      $building.append($icon);
      const $title = document.createElement("h3");
      $title.innerHTML = building.name;
      $building.append($title);
      $building.onclick = () => {
        BuildQueue.add(building);
      }
      $buildings.append($building);
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
      return Building.findByMenuItem(value);
    }
    return [];
  },
  /**
   * Get list of buildings that belongs to the menu item.
   *
   * @param cathegory string.
   * @return array of buildings.
   */
  findByMenuItem: (item) => {
    const cathegories = [];

    if (item.children) {
      for (let childIndex in item.children) {
        cathegories.push(item.children[childIndex]);
      }
    } else {
      cathegories.push(item.name);
    }
    const buildings = [];

    for (let buildingInex in Building.list) {
      const building = Building.list[buildingInex];

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
   * List of buildings available for the crafting.
   */
  list: {
    TIMBER_WALL: {
      name: "Timber Wall",
      icon: "tibmer_basic_wall.webp",
      cathegory: Menu.list.BASIC_COMPONENTS.children.TIMBER,
      recipe: [{
        ingridient: Ingridient.list.CARBON,
        count: 25
      }]
    },
    TIMBER_WALL_LARGE_WINDLOW: {
      name: "Extruded Timber Large Window",
      icon: "timber_extruded_window_wall.webp",
      cathegory: Menu.list.BASIC_COMPONENTS.children.TIMBER,
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
      cathegory: Menu.list.EQUIPMENT.children.PERMANENT,
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
