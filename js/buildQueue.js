const BuildQueue = {
  queue: [],
  /**
   * Add building to the queue.
   *
   * @param building - javascript object of the building.
   */
  add: (building) => {
    if (BuildQueue.isPresent(building)) {
      BuildQueue.changeNumber(building, BuildQueue.operation.ADD);
    } else {
      BuildQueue.queue.push(building);
      BuildQueue.render(building);
    }
  },
  substract: (building) => {

  },
  /**
   * Check if building is present in the queue.
   *
   * @param building - javascript object of the building.
   */
  isPresent: (building) => {
    const queue = BuildQueue.queue;

    for (let buildingInex in queue) {
      const buildingInQ = queue[buildingInex];

      if (buildingInQ.name === building.name) {
        return true;
      }
    }
    return false;
  },
  /**
   * Render building on the UI panel.
   *
   * @param building - javascript object of the building.
   */
  render: (building) => {
    const $building = document.createElement("div");
    $building.classList.add("building");
    $building.classList.add(Building.getUid(building));
    $building.innerHTML = building.name;

    const $queue = document.getElementById("queue");
    $queue.append($building);
  },
  changeNumber: (building, operation) => {

  },
  operation: {
    SUBSTRACT: "substract",
    ADD: "add"
  }
}
