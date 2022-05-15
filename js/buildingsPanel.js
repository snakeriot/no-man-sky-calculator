const BuildingsPanel = {
  /**
   * Render list of the buildings based on the search criteria.
   */
  renderList: (criteria) => {
    const buildings = BuildingsPanel.find(criteria);
    const $buildings = document.getElementById("building-list");
    $buildings.innerHTML = "";

    for (let buildingInex in buildings) {
      BuildingsPanel.render($buildings, buildings[buildingInex]);
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
      $icon.src = BuildingsPanel.getIconUrl(building);
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
      return BuildingsPanel.findByMenuItem(value);
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

    for (let buildingInex in Buildings) {
      const building = Buildings[buildingInex];

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
