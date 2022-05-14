const menu = {
  /**
   * Render menu when page is opened.
   */
  render: () => {
    const $menu = document.getElementById("menu");
    const menuItems = menu.items;

    for (let itemString in menuItems) {
      const item = menuItems[itemString];
      menu.createMenuNode(item, $menu);
    }
  },
  /**
   * Create an element in the menu.
   **/
  createMenuNode: (item, $parent) => {
    const $item = document.createElement("li");
    $item.innerHTML = item.name;
    $item.onclick = (event) => {
      menu.pickItem(event.target, item);
    };
    $parent.prepend($item);
  },
  /**
   * Select menu item.
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

    if ($parent.id === "sub-menu") {
      return;
    }
    const $menu = document.getElementById("sub-menu");
    $menu.innerHTML = "";

    if (item.children) {
      $menu.classList.remove("hidden");
      for (const name in item.children) {
        menu.createMenuNode({name: item.children[name]}, $menu);
      }
    } else {
      $menu.classList.add("hidden");
    }
  },
  /**
   * List of menu items.
   **/
  items: {
    FREIGHT_COMPONENTS: {
      name: "Freighter Components"
    },
    BASIC_COMPONENTS: {
      name: "Basic Components",
      children: {
        SMALL: "Small Adornments",
        TIMBER: "Timber Components",
        STONE: "Stone Components",
        ALLOY: "Alloy Components"
      }
    },
    STRUCTURES: {
      name: "Structures",
      children: {
        LARGE: "Large Rooms",
        SMALL: "Small Rooms",
        DOORS_N_LADDERS: "Doors & Ladders",
        FRAMES_N_FOUNDATIONS: "Frames & Foundations",
        WINDOWS: "Windows"
      }
    },
    EQUIPMENT: {
      name: "Equipment",
      children: {
        TERMINALS: "Specialist Terminals",
        PERMANENT: "Permanent Technology",
        PORTABLE: "Portable Technology",
        EXOCRAFT: "Exocraft Modules",
        FARMING: "Farming",
        STORAGE: "Storage",
        FIREWORKS: "Firework Launcher"
      }
    },
    DECORATIVE: {
      name: "Decorations",
      children: {
        DECORATIONS: "Decorative Modules",
        ADORNMENTS: "Adornments",
        LIGHT: "Lights",
        DECAILS: "Decails",
        POSTERS: "Wall Posters",
        FILAGE: "Foliage"
      }
    },
    AQUATIC: {
      name: "Aquatic Construction"
    }
  }
}

menu.render();
