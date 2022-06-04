const Menu = {
  active: undefined,
  /**
   * Render menu when page is opened.
   */
  render: () => {
    const $menu = document.getElementById("menu");
    const menuItems = EnumUtil.toArray(MenuItems);

    for (let itemString in menuItems) {
      const item = menuItems[itemString];
      Menu.createMenuNode(item, $menu);
    }
    setTimeout(Menu.selectFirst, 500);
  },
  /**
   * Select first element from the menu.
   */
  selectFirst: () => {
    document.querySelector("#menu > li:first-child").click();
  },
  /**
   * Create an element in the menu.
   **/
  createMenuNode: (item, $parent) => {
    const $item = document.createElement("li");

    if (item.icon) {
      const $icon = document.createElement("img");
      $icon.src = MenuItems.getIconUrl(item);
      $icon.alt = item.name;
      $item.append($icon);
    } else {
      $item.innerHTML = item.name;
    }
    $item.onclick = (event) => {
      Menu.pickItem($item, item);
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
    Menu.active = item;
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
