/**
 * List of buildings.
 */
const Buildings = {
  BASE_COMPUTER: {
    name: "Base Computer",
    icon: "base_computer.webp",
    cathegory: MenuItems.DEPLOYABLE_TECHNOLOGY.children.PORTABLE,
    recipe: [{
      ingridient: Ingridients.CHROMATIC_METAL,
      number: 30
    }]
  },
  LARGE_FREIGHTER_ROOM_1: {
    name: "Large Freighter Room (Variant 1)",
    icon: "large_freighter_room_1.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 120
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 20
    }]
  },
  LARGE_FREIGHTER_ROOM_2: {
    name: "Large Freighter Room (Variant 2)",
    icon: "large_freighter_room_2.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 120
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 20
    }]
  },
  LARGE_FREIGHTER_ROOM_3: {
    name: "Large Freighter Room (Variant 3)",
    icon: "large_freighter_room_3.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 120
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 20
    }]
  },
  FREIGHTER_CORRIDOR: {
    name: "Freighter Corridor",
    icon: "freighter_corridor.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 80
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 10
    }]
  },
  CURVED_FREIGHTER_CORRIDOR: {
    name: "Curved Freighter Corridor",
    icon: "curved_freighter_corridor.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 80
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 10
    }]
  },
  FREIGHTER_JUNCTION: {
    name: "Freighter Junction",
    icon: "freighter_junction.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 80
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 10
    }]
  },
  FREIGHTER_STAIRS: {
    name: "Freighter Stairs",
    icon: "freighter_stairs.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 50
    }]
  },
  FREIGHTER_CROSS_JUNCTION: {
    name: "Freighter Cross Junction",
    icon: "freighter_cross_junction.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 80
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 10
    }]
  },
  FLEET_COMMAND_ROOM: {
    name: "Fleet Command Room",
    icon: "fleet_command_room.webp",
    cathegory: MenuItems.FREIGHT_COMPONENTS,
    recipe: [{
      ingridient: Ingridients.SILVER,
      number: 120
    }, {
      ingridient: Ingridients.GOLD,
      number: 40
    }, {
      ingridient: Ingridients.TRITIUM,
      number: 10
    }]
  },
  CYLINDRICAL_ROOM: {
    name: "Cylindrical Room",
    icon: "cylindrical_room.webp",
    cathegory: MenuItems.STRUCTURES.children.ROOMS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 250
    }]
  },
  SQUARE_ROOM: {
    name: "Square Room",
    icon: "square_room.webp",
    cathegory: MenuItems.STRUCTURES.children.ROOMS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 250
    }]
  },
  BIO_DOME: {
    name: "Bio-Dome",
    icon: "bio_dome.webp",
    cathegory: MenuItems.STRUCTURES.children.ROOMS,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      number: 25
    }, {
      ingridient: Ingridients.GLASS,
      number: 5
    }]
  },
  STRAIGHT_CORRIDOR: {
    name: "Straight Corridor",
    icon: "straight_corridor.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 100
    }]
  },
  L_SHAPED_CORRIDOR: {
    name: "L-Shaped Corridor",
    icon: "l_shaped_corridor.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 100
    }]
  },
  T_SHAPED_CORRIDOR: {
    name: "T-Shaped Corridor",
    icon: "t_shaped_corridor.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 100
    }]
  },
  X_SHAPED_CORRIDOR: {
    name: "X-Shaped Corridor",
    icon: "x_shaped_corridor.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 100
    }]
  },
  CURVED_CORRIDOR: {
    name: "Curved Corridor",
    icon: "curved_corridor.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 100
    }]
  },
  GLASS_ROOFED_CORRIDOR: {
    name: "Glass Roofed Corridor",
    icon: "glass_roofed_corridor.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 30
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  VIEWING_SPHERE: {
    name: "Viewing Sphere",
    icon: "viewing_sphere.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      number: 10
    }, {
      ingridient: Ingridients.GLASS,
      number: 3
    }]
  },
  TIMBER_WALL: {
    name: "Timber Wall",
    icon: "tibmer_basic_wall.webp",
    cathegory: MenuItems.TIMBER.children.WALLS_DOORS_WINDOWS,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }]
  },
  TIMBER_FLOOR: {
    name: "Timber Floor",
    icon: "tibmer_basic_floor.webp",
    cathegory: MenuItems.TIMBER.children.FLOORING_N_STAIRS,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 10
    }]
  },
  TIMBER_RECTANGULAR_DOOR: {
    name: "Timber Rectangular Door",
    icon: "tibmer_rectangular_door.webp",
    cathegory: MenuItems.TIMBER.children.WALLS_DOORS_WINDOWS,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    },
    {
      ingridient: Ingridients.FERRIT_P,
      number: 10
    }]
  },
  LARGE_TIMBER_TRIPPLE_WINDOW: {
    name: "Large Timber Triple Window",
    icon: "large_timber_triple_window.webp",
    cathegory: MenuItems.TIMBER.children.WALLS_DOORS_WINDOWS,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    },
    {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  TIMBER_WALL_LARGE_WINDLOW: {
    name: "Extruded Timber Large Window",
    icon: "timber_extruded_window_wall.webp",
    cathegory: MenuItems.TIMBER.children.WALLS_DOORS_WINDOWS,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  TIMBER_FRAMED_GLASS_PANEL: {
    name: "Timber-Framed Glass Panel",
    icon: "timber_framed_glass_panel.webp",
    cathegory: MenuItems.TIMBER.children.ROOFING,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 10
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  TIMBER_RAMP: {
    name: "Timber Ramp",
    icon: "timber_ramp.webp",
    cathegory: MenuItems.TIMBER.children.FLOORING_N_STAIRS,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 35
    }, {
      ingridient: Ingridients.FERRIT,
      number: 10
    }]
  },
  TRADE_TERMINAL: {
    name: "Galactic Trade Terminal",
    icon: "trade_terminal.webp",
    cathegory: MenuItems.ADVANCED_TECH.children.TERMINALS,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      number: 25
    }, {
      ingridient: Ingridients.MICROCHIP,
      number: 3
    }]
  },
  BASE_TELEPORT: {
    name: "Base Teleport Module",
    icon: "base_teleport.webp",
    cathegory: MenuItems.ADVANCED_TECH.children.GENERAL,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 4
    }, {
      ingridient: Ingridients.CARBON_NANOTUBES,
      number: 2
    }, {
      ingridient: Ingridients.SODIUM,
      number: 40
    }]
  },
  LANDING_PAD: {
    name: "Landing Pad",
    icon: "landing_pad.webp",
    cathegory: MenuItems.ADVANCED_TECH.children.GENERAL,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 10
    }, {
      ingridient: Ingridients.ION_BATTERY,
      number: 2
    }, {
      ingridient: Ingridients.MICROCHIP,
      number: 2
    }]
  },
  STORAGE_CONTAINER: {
    name: "Storage Container",
    icon: "storage_container.webp",
    cathegory: MenuItems.ADVANCED_TECH.children.STORAGE,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      number: 35
    }, {
      ingridient: Ingridients.SODIUM,
      number: 20
    }]
  },
  SOLAR_PANEL: {
    name: "Solar Panel",
    icon: "solar_panel.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.POWER,
    recipe: [{
      ingridient: Ingridients.GOLD,
      number: 30
    }, {
      ingridient: Ingridients.METAL_PLATING,
      number: 1
    }, {
      ingridient: Ingridients.CHROMATIC_METAL,
      number: 50
    }]
  },
  BATTERY: {
    name: "Battery",
    icon: "battery.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.POWER,
    recipe: [{
      ingridient: Ingridients.FERRIT_M,
      number: 60
    }, {
      ingridient: Ingridients.CARBON_C,
      number: 100
    }]
  },
  GAS_EXTRACTOR: {
    name: "Gas Extractor",
    icon: "gas_extractor.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.INDUSTRY,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 5
    }, {
      ingridient: Ingridients.CHROMATIC_METAL,
      number: 100
    }]
  },
  MINERAL_EXTRACTOR: {
    name: "Mineral Extractor",
    icon: "mineral_extractor.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.INDUSTRY,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 5
    }, {
      ingridient: Ingridients.CHROMATIC_METAL,
      number: 100
    }]
  },
  SUPPLY_PIPE: {
    name: "Sypply Pipe",
    icon: "supply_pipe.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.INDUSTRY,
    recipe: [{
      ingridient: Ingridients.FERRIT,
      number: 25
    }, {
      ingridient: Ingridients.CARBON,
      number: 10
    }]
  },
  SUPPLY_DEPOT: {
    name: "Supply Depot",
    icon: "supply_depot.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.INDUSTRY,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 10
    }]
  },
  ELECTROMAGNETIC_GENERATOR: {
    name: "Electromagnetic Generator",
    icon: "electromagnetic_generator.webp",
    cathegory: MenuItems.POWER_N_INDUSTRY.children.POWER,
    recipe: [{
      ingridient: Ingridients.METAL_PLATING,
      number: 2
    }, {
      ingridient: Ingridients.FERRIT_M,
      number: 60
    }, {
      ingridient: Ingridients.CHROMATIC_METAL,
      number: 75
    }]
  },
  COLOURED_LIGHT: {
    name: "Coloured Light",
    icon: "coloured_light.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.SODIUM,
      number: 5
    }]
  },
  CEILING_LIGHT: {
    name: "Ceiling Light",
    icon: "ceiling_light.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.SODIUM,
      number: 15
    }, {
      ingridient: Ingridients.FERRIT_P,
      number: 5
    }]
  },
  LIGHT: {
    name: "Light",
    icon: "light.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.SODIUM,
      number: 5
    }]
  },
  LAB_LAMP: {
    name: "Lab Lamp",
    icon: "lab_lamp.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.SODIUM,
      number: 10
    }]
  },
  SPLAYED_HANGING_LAMP: {
    name: "Splayed hanging Lamp",
    icon: "splayed_hanging_lamp.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }]
  },
  CIRCLES_HANGING_LAMP: {
    name: "Circles Hanging Lamp",
    icon: "circles_hanging_lamp.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }]
  },
  TRIPLE_HANGING_LAMP: {
    name: "Triple Hanging Lamp",
    icon: "triple_hanging_lamp.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }]
  },
  TUBE_LAMP: {
    name: "Tube Lamp",
    icon: "tube_lamp.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }]
  },
  HANGING_LAMP: {
    name: "Hanging Lamp",
    icon: "hanging_lamp.webp",
    cathegory: MenuItems.DECORATIVE.children.LIGHT,
    recipe: [{
      ingridient: Ingridients.CARBON,
      number: 25
    }]
  },
  DEEPWATER_CHAMBER: {
    name: "Deepwater Chamber",
    icon: "deepwater_chamber.webp",
    cathegory: MenuItems.STRUCTURES.children.ROOMS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 180
    }]
  },
  SQUARE_DEEPWATER_CHAMBER: {
    name: "Square Deepwater Chamber",
    icon: "square_deepwater_chamber.webp",
    cathegory: MenuItems.STRUCTURES.children.ROOMS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 350
    }]
  },
  MOON_POOL_FLOOR: {
    name: "Moon Pool Floor",
    icon: "moon_pool_floor.webp",
    cathegory: MenuItems.STRUCTURES.children.DOORS_N_LADDERS,
    recipe: [{
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 3
    }, {
      ingridient: Ingridients.LIVING_PEARL,
      number: 2
    }, {
      ingridient: Ingridients.FERRIT_P,
      number: 80
    }]
  },
  WATERTIGHT_DOOR: {
    name: "Watertight Door",
    icon: "watertight_door.webp",
    cathegory: MenuItems.STRUCTURES.children.DOORS_N_LADDERS,
    recipe: [{
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 1
    }, {
      ingridient: Ingridients.FERRIT_P,
      number: 25
    }]
  },
  GLASS_TUNNEL: {
    name: "Glass Tunnel",
    icon: "glass_tunnel.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 25
    }, {
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 2
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  L_SHAPED_GLASS_TUNNEL: {
    name: "L-Shaped Glass Tunnel",
    icon: "l_shaped_glass_tunnel.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 25
    }, {
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 2
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  T_SHAPED_GLASS_TUNNEL: {
    name: "T-Shaped Glass Tunnel",
    icon: "t_shaped_glass_tunnel.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 25
    }, {
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 2
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  X_SHAPED_GLASS_TUNNEL: {
    name: "X-Shaped Glass Tunnel",
    icon: "x_shaped_glass_tunnel.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 25
    }, {
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 2
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  VERTICAL_GLASS_TUNNEL: {
    name: "Vertical Glass Tunnel",
    icon: "vertical_glass_tunnel.webp",
    cathegory: MenuItems.STRUCTURES.children.CORRIDORS,
    recipe: [{
      ingridient: Ingridients.FERRIT_P,
      number: 25
    }, {
      ingridient: Ingridients.CRYSTAL_SULPHIDE,
      number: 2
    }, {
      ingridient: Ingridients.GLASS,
      number: 1
    }]
  },
  /**
   * Get list of buildings by search criteria.
   *
   * @param criteria object that should have following fields: property, value.
   * @return array of buildings.
   */
  find: (criteria) => {
    const property = criteria.property;
    const value = criteria.value;

    if (property === "cathegory") {
      return Buildings.findByMenuItem(value);
    } else if (property === "name") {
      return Buildings.findByName(value);
    }
    return [];
  },
  /**
   * Get list of buildings by name.
   *
   * @param name string.
   * @return array of buildings.
   */
  findByName: (name) => {
    const buildings = [];
    const array = EnumUtil.toArray(Buildings);

    for (let inex in array) {
      const building = array[inex];

      if (building.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
        buildings.push(building);
      }
    }
    return buildings;
  },
  /**
   * Get list of buildings that belongs to the menu item.
   *
   * @param item selected menu item.
   * @return array of buildings.
   */
  findByMenuItem: (item) => {
    const cathegories = [];

    if (!item) {
      return cathegories;
    }
    if (item.children) {
      for (let childIndex in item.children) {
        cathegories.push(item.children[childIndex]);
      }
    } else {
      cathegories.push(item.name);
    }
    const buildings = [];
    const array = EnumUtil.toArray(Buildings);

    for (let inex in array) {
      const building = array[inex];
      const cathegory = building.cathegory["name"]  || building.cathegory;

      if (cathegories.indexOf(cathegory) > -1) {
        buildings.push(building);
      }
    }
    return buildings;
  },
  /**
   * Get uid of the building.
   *
   * @param building - javascript object of the building.
   */
  getUid: (building) => {
    return building.name.replaceAll(/ |\(|\)/g, "_");
  },
  /**
   * Get url of the icon for the building.
   *
   * @param building - javascript object of the building.
   */
  getIconUrl: (building) => {
    return "./images/buildings/" + building.icon;;
  }
}
