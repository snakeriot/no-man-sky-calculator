const DomBuilder = {
  /**
   * Create custom styled checkBox.
   */
  checkBox: () => {
    const $container = document.createElement("label");
    $container.classList.add("container");
    const $checkBox = document.createElement("input");
    $checkBox.setAttribute("type", "checkbox");
    $container.append($checkBox);
    const $check = document.createElement("span");
    $check.classList.add("checkmark");
    $container.append($check);
    return $container;
  }
}
