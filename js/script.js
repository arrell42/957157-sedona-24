var buttonSearch = document.querySelector(".button-search");
var searchBlock = document.querySelector(".search-block");



buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();

  searchBlock.classList.add("search-block-show");

  if (buttonSearch.classList.contains("clicked")) {
    searchBlock.classList.add("search-block-close");
  } else {
    searchBlock.classList.remove("search-block-close");
  }
  
  buttonSearch.classList.toggle("clicked");
});

