function searchHandle(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchHandle);
