(function () {
  "use strict";

  var STORAGE_KEY = "site-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var themeColor = document.querySelector("#theme-color-meta");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function updateControl(theme) {
    if (!toggle) return;

    var nextTheme = theme === "dark" ? "light" : "dark";
    var icon = toggle.querySelector(".theme-toggle__icon");
    var label = toggle.querySelector(".theme-toggle__label");
    var nextLabel = nextTheme === "dark" ? toggle.dataset.labelDark : toggle.dataset.labelLight;

    if (icon) icon.textContent = nextTheme === "dark" ? "☾" : "☀";
    if (label) label.textContent = nextLabel;
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.setAttribute("title", nextLabel);
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (themeColor) themeColor.setAttribute("content", theme === "dark" ? "#0b1020" : "#f5f9ff");
    updateControl(theme);

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (error) {
        // The theme still works when storage is unavailable.
      }
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  applyTheme(currentTheme(), false);
})();
