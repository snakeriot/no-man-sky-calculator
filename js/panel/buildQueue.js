const BuildQueuePanel = {
  queue: [],
  /**
   * Add building to the queue.
   *
   * @param building - javascript object of the building.
   */
  add: (building) => {
    if (BuildQueuePanel.isPresent(building)) {
      BuildQueuePanel.changeNumber(building, Operations.ADD);
    } else {
      BuildQueuePanel.queue.push({
        building: building,
        number: 1
      });
      BuildQueuePanel.render(building);
    }
  },
  /**
   * Check if building is present in the queue.
   *
   * @param building - javascript object of the building.
   */
  isPresent: (building) => {
    return BuildQueuePanel.getBuilding(building) !== undefined;
  },
  /**
   * Render building on the UI panel.
   *
   * @param building - javascript object of the building.
   */
  render: (building) => {
    const $building = document.createElement("div");
    $building.classList.add("building");
    $building.classList.add(Buildings.getUid(building));
    const $buildIcon = document.createElement("img");
    $buildIcon.src = Buildings.getIconUrl(building);
    $building.append($buildIcon);
    const $buildName = document.createElement("span");
    $buildName.innerHTML = building.name;
    $buildName.classList.add("name");
    $building.append($buildName);

    const $buildNumControl = document.createElement("div")
    $buildNumControl.classList.add("build-num-control");
    const $buildNumSubstract = document.createElement("a");
    $buildNumSubstract.innerHTML = "-";
    $buildNumSubstract.onclick = () => {
      BuildQueuePanel.changeNumber(building, Operations.SUBSTRACT);
    };
    $buildNumControl.append($buildNumSubstract);
    const $buildNum = document.createElement("span");
    $buildNum.innerHTML = 1;
    $buildNum.classList.add("build-number");
    $buildNumControl.append($buildNum);
    const $buildNumAdd = document.createElement("a");
    $buildNumAdd.innerHTML = "+";
    $buildNumAdd.onclick = () => {
      BuildQueuePanel.changeNumber(building, Operations.ADD);
    };
    $buildNumControl.append($buildNumAdd);
    $building.append($buildNumControl);

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
    const buildingInQ = BuildQueuePanel.getBuilding(building);
    const $queue = document.getElementById("queue");
    const $building = $queue.querySelector("." + Buildings.getUid(building));

    if (operation === Operations.SUBSTRACT) {
      buildingInQ.number -= 1;
    } else {
      buildingInQ.number += 1;
    }
    if (buildingInQ.number < 1) {
      $building.remove();
      BuildQueuePanel.queue = BuildQueuePanel.queue.filter((b) => {
        return b.building.name !== building.name;
      });
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
    const queue = BuildQueuePanel.queue;

    for (let buildingInex in queue) {
      const buildingInQ = queue[buildingInex];

      if (buildingInQ.building.name === building.name) {
        return buildingInQ;
      }
    }
    return;
  }
}
