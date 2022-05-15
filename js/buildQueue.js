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
      BuildQueue.queue.push({
        building: building,
        number: 1
      });
      BuildQueue.render(building);
    }
  },
  /**
   * Check if building is present in the queue.
   *
   * @param building - javascript object of the building.
   */
  isPresent: (building) => {
    return BuildQueue.getBuilding(building) !== undefined;
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
    const $buildName = document.createElement("span");
    $buildName.innerHTML = building.name;
    $building.append($buildName);
    const $buildNum = document.createElement("div");
    $buildNum.innerHTML = 1;
    $buildNum.classList.add("build-number");
    $building.append($buildNum);

    const $queue = document.getElementById("queue");
    $queue.append($building);
  },
  /**
   * Change number of selected buildings.
   *
   * @param building - javascript object of the building.
   * @param operation one of the BuildQueue.operation
   */
  changeNumber: (building, operation) => {
    const buildingInQ = BuildQueue.getBuilding(building);
    const $queue = document.getElementById("queue");
    const $building = $queue.querySelector("." + Building.getUid(building));

    if (operation === BuildQueue.SUBSTRACT) {
      buildingInQ.number -= 1;
    } else {
      buildingInQ.number += 1;
    }
    if (buildingInQ.number < 1) {
      $building.remove();
      return;
    }
    $building.querySelector(".build-number").innerHTML = buildingInQ.number;
    return;
  },
  /**
   * Get queue element that corresponds the building.
   *
   * @param building - javascript object of the building.
   * @return object with two fields - building and number.
   */
  getBuilding: (building) => {
    const queue = BuildQueue.queue;

    for (let buildingInex in queue) {
      const buildingInQ = queue[buildingInex];

      if (buildingInQ.building.name === building.name) {
        return buildingInQ;
      }
    }
    return;
  },
  operation: {
    SUBSTRACT: "substract",
    ADD: "add"
  }
}
