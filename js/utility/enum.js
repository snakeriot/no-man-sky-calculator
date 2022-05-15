const EnumUtil = {
  toArray: (enumObject) => {
    const array = [];

    for (let key in enumObject) {
      const field = enumObject[key];

      if (typeof field === "object") {
        array.push(field);
      }
    }
    return array;
  }
}
