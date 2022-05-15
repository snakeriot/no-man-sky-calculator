const Menu = {
  /**
   * Render menu when page is opened.
   */
  render: () => {
    const $menu = document.getElementById("menu");
    const menuItems = MenuItems;

    for (let itemString in menuItems) {
      const item = menuItems[itemString];
      Menu.createMenuNode(item, $menu);
    }
  },
  /**
   * Create an element in the menu.
   **/
  createMenuNode: (item, $parent) => {
    const $item = document.createElement("li");
    $item.innerHTML = item.name;
    $item.onclick = (event) => {
      Menu.pickItem(event.target, item);
    };
    $parent.prepend($item);
  },
  /**
   * Select menu item.
   *
   * @param $node - javascript object of the clicked node.
   * @param item - Menu item that was clicked.
   */
  pickItem: ($node, item) => {
    const $parent = $node.parentElement;
    const $active = $parent.querySelectorAll(".active");

    if ($active !== null && $active.length !== 0) {
      for (const index in $active) {
        if ($active.hasOwnProperty(index)) {
          const $element = $active[index];
          $element.classList.remove("active");
        }
      }
    }
    $node.classList.add("active");
    BuildingsPanel.renderList({
      property: "cathegory",
      value: item
    });

    if ($parent.id === "sub-menu") {
      return;
    }
    const $menu = document.getElementById("sub-menu");
    $menu.innerHTML = "";

    if (item.children) {
      $menu.classList.remove("hidden");
      for (const name in item.children) {
        Menu.createMenuNode({name: item.children[name]}, $menu);
      }
    } else {
      $menu.classList.add("hidden");
    }
  }
}

Menu.render();
