const IngridientsPanel = {
  list: [],
  /**
   * Add building to to build list.
   *
   * @param building javascript object of the building to render.
   */
  addBuilding: (building) => {
    for (let index in building.recipe) {
      const recipeNode = {... building.recipe[index]};

      if (IngridientsPanel.isPresent(recipeNode.ingridient)) {
        IngridientsPanel.changeNumber(recipeNode, Operations.ADD);
      } else {
        IngridientsPanel.list.push(recipeNode);
        IngridientsPanel.render(recipeNode);
      }
    }
  },
  /**
   * Remove building from to build list.
   *
   * @param building javascript object of the building to render.
   */
  removeBuilding: (building) => {
      for (let index in building.recipe) {
        const recipeNode = building.recipe[index];
        IngridientsPanel.changeNumber(recipeNode, Operations.SUBSTRACT);
      }
  },
  /**
   * Render ingridient on the page.
   *
   * @param recipeNode - javascript object that contains ingridient and quantity.
   */
  render: (recipeNode) => {
    const ingridient = recipeNode.ingridient;
    const $ingridient = document.createElement("div");
    $ingridient.classList.add("ingridient");
    $ingridient.classList.add(Ingridients.getUid(ingridient));
    $ingridient.append(DomBuilder.checkBox());

    const $icon = document.createElement("img");
    $icon.src = Ingridients.getIconUrl(ingridient);
    $ingridient.append($icon);

    const $name = document.createElement("span");
    $name.innerHTML = ingridient.name;
    $name.classList.add("name");
    $ingridient.append($name);
    $ingridient.setAttribute("ordinal", ingridient.ordinal);

    const $num = document.createElement("span");
    $num.innerHTML = recipeNode.number;
    $num.classList.add("ingridient-number");
    $ingridient.append($num);

    const $list = document.getElementById("ingridients");
    $list.append($ingridient);
    IngridientsPanel.sort();
  },
  /**
   * Change order of ingridients, sort them by ordinal.
   */
  sort: () => {
    const $ingridients = document.querySelectorAll('.ingridient');
    const $array = [].slice.call($ingridients).sort(function (a, b) {
        const ordinalA = parseInt(a.getAttribute("ordinal"));
        const ordinalB = parseInt(b.getAttribute("ordinal"));
        return ordinalA > ordinalB ? 1 : -1;
    });
    const $panel = document.getElementById("ingridients");
    $array.forEach(function ($ingridient) {
        $panel.appendChild($ingridient);
    });
  },
  /**
   * Change number of selected buildings.
   *
   * @param recipeNode - javascript object that contains ingridient and quantity.
   */
  changeNumber: (recipeNode, operation) => {
    const ingridient = recipeNode.ingridient;
    const recipeNodeInList = IngridientsPanel.get(ingridient);
    const $list = document.getElementById("ingridients");
    const $ingridient = $list.querySelector("." + Ingridients.getUid(ingridient));

    if (operation === Operations.ADD) {
      recipeNodeInList.number += recipeNode.number;
    } else {
      recipeNodeInList.number -= recipeNode.number;
    }
    if (recipeNodeInList.number < 1) {
      $ingridient.remove();
      IngridientsPanel.list = IngridientsPanel.list.filter((i) => {
        return i.ingridient.name !== ingridient.name;
      });
      return;
    }
    $ingridient.querySelector(".ingridient-number").innerHTML = recipeNodeInList.number;
    return;
  },
  /**
   * Check if ingridient is already present in the list.
   *
   * @param ingridient javascript object of the building to render.
   */
  isPresent: (ingridient) => {
    return IngridientsPanel.get(ingridient) !== undefined;
  },
  /**
   * Get ingridient from the list of already added.
   *
   * @param ingridient - javascript object of the building.
   * @return object with two fields - building and number.
   */
  get: (ingridient) => {
    const list = IngridientsPanel.list;

    for (let index in list) {
      const ingridientInList = list[index];

      if (ingridientInList.ingridient.name === ingridient.name) {
        return ingridientInList;
      }
    }
    return;
  }
}
