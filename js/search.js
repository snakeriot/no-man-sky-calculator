const SearchBar = {
  init: () => {
    document.getElementById("search-input").oninput = (event) => {
      SearchBar.search(event.target.value);
    };
  },
  search: (value) => {
    if (value === "") {
      BuildingsPanel.renderList({
        property: "cathegory",
        value: Menu.active
      });
    } else {
      BuildingsPanel.renderList({
        property: "name",
        value: value
      });
    }
  }
}

SearchBar.init();
