/**
 * List of menu items.
 */
const MenuItems = {
  DEPLOYABLE_TECHNOLOGY: {
    name: "Deployable Technology",
    icon: "portable.png",
    children: {
      PORTABLE: "Portable Units",
      EXOCRAFT: "Exocraft Geobays"
    }
  },
  FREIGHT_COMPONENTS: {
    name: "Freighter Components",
    icon: "freighter.png"
  },
  STRUCTURES: {
    name: "Large Structures",
    icon: "large_structures.png",
    children: {
      ROOMS: "Rooms And Foundations",
      CORRIDORS: "Corridors",
      DOORS_N_LADDERS: "Doors And Ladders",
      CUBOID: "Cuboid Rooms"
    }
  },
  TIMBER: {
    name: "Timber Structures",
    icon: "timber_structures.png",
    children: {
      FLOORING_N_STAIRS: "Flooring And Stairs",
      WALLS_DOORS_WINDOWS: "Walls, Doors And Windows",
      ROOFING: "Roofing"
    }
  },
  STONE: {
    name: "Stone Structures",
    icon: "stone_structures.png",
    children: {
      FLOORING_N_STAIRS: "Flooring And Stairs",
      WALLS_DOORS_WINDOWS: "Walls, Doors And Windows",
      ROOFING: "Roofing"
    }
  },
  ALLOY: {
    name: "Alloy Structures",
    icon: "alloy_structures.png",
    children: {
      FLOORING_N_STAIRS: "Flooring And Stairs",
      WALLS_DOORS_WINDOWS: "Walls, Doors And Windows",
      ROOFING: "Roofing"
    }
  },
  ADVANCED_TECH: {
    name: "Advanced Technology",
    icon: "advanced_tech.png",
    children: {
      GENERAL: "General Utility",
      FARMING: "Farming",
      STORAGE: "Storage",
      TERMINALS: "Specialist Terminals"
    }
  },
  POWER_N_INDUSTRY: {
    name: "Power And Industry",
    icon: "power_industry.png",
    children: {
      POWER: "Power Generation",
      INDUSTRY: "Industrial Components",
      ELECTRICAL: "Electrical Switches"
    }
  },
  FURNISHING: {
    name: "Furnishings",
    icon: "furnishing.png",
    children: {
      INTERIOR: "Interior Decoration",
      DECORATIVE_TECH: "Decorative Technology"
    }
  },
  DECORATIVE: {
    name: "Decoration",
    icon: "decoration.png",
    children: {
      LIGHT: "Lights",
      ADORNMENTS: "Structural Adornments",
      CONSTRUCTION: "Construction Parts"
    }
  },
  WALL_ART: {
    name: "Wall Art",
    icon: "wall_art.png",
    children: {
      DECAILS: "Decails",
      POSTERS: "Posters"
    }
  },
  LEGACY: {
    name: "Legacy Structures",
    icon: "legacy.png",
    children: {
      WOOD: "Wood",
      METAIL: "Metal"
    }
  },
  getIconUrl: (item) => {
    return "./images/menu/" + item.icon;;
  }
}
