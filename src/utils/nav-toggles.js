export default function() {
  var searchOpen = document.getElementById("search-open");
  var searchBar = document.getElementById("mobile_search");
  if (searchBar) {
    var searchClose = searchBar.querySelector(".search-close");
  }
  var menuToggle = document.getElementById("menu-toggle");
  var mainNavMenu = document.getElementById("mobile-main-nav");
  var body = document.body;

  function showMobileElement(element) {
    element.classList.add("show-me");
  }
  function hideMobileElement(element) {
    element.classList.remove("show-me");
  }

  function toggleMobileElement(element) {
    let elClassList = element.classList;
    if (elClassList.contains("show-me")) {
      element.classList.remove("show-me");
      body.classList.remove("lock-body");
    } else {
      element.classList.add("show-me");
      body.classList.add("lock-body");
    }
  }
  if (searchOpen) {
    searchOpen.addEventListener("click", () => {
      showMobileElement(searchBar);
    });
  }
  if (searchClose) {
    searchClose.addEventListener("click", e => {
      e.preventDefault();
      hideMobileElement(searchBar);
    });
  }
  if (menuToggle) {
    menuToggle.addEventListener("click", e => {
      toggleMobileElement(mainNavMenu, e.target);
    });
  }
}
