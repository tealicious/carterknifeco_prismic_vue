import debounce from "./debounce";
export default function() {
  var scrollpos =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var nav = document.querySelector("nav.main.desktop");
  if (!nav) {
    return;
  }
  function add_class_on_scroll() {
    nav.classList.add("has-scrolled");
  }

  function remove_class_on_scroll() {
    nav.classList.remove("has-scrolled");
  }
  let lastScrollTop = 0;
  let firstSectionBottom = window.innerWidth * 0.5625 * 0.62222;
  window.addEventListener(
    "scroll",
    function() {
      var scrollpos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && scrollpos > firstSectionBottom) {
        debounce(add_class_on_scroll(), 30);
      } else if (st < lastScrollTop && scrollpos < firstSectionBottom) {
        debounce(remove_class_on_scroll(), 30);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}
