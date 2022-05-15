const BuildingsPanel = {
  /**
   * Render list of the buildings based on the search criteria.
   */
  renderList: (criteria) => {
    const buildings = Buildings.find(criteria);
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
      $icon.src = Buildings.getIconUrl(building);
      $building.append($icon);
      const $title = document.createElement("h3");
      $title.innerHTML = building.name;
      $building.append($title);
      $building.onclick = () => {
        BuildQueuePanel.add(building);
      }
      $buildings.append($building);
  }
}
