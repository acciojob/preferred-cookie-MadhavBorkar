//your JS code here. If required.
function setCookie(name, value, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

function applyPreferences(fontsize, fontcolor) {
  if (fontsize) {
    document.documentElement.style.setProperty("--fontsize", fontsize + "px");
    document.getElementById("fontsize").value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty("--fontcolor", fontcolor);
    document.getElementById("fontcolor").value = fontcolor;
  }
}
window.addEventListener("DOMContentLoaded", function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize || savedFontColor) {
    applyPreferences(savedFontSize, savedFontColor);
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fontsizeInput = document.getElementById("fontsize").value;
  const fontcolorInput = document.getElementById("fontcolor").value;

  if (fontsizeInput < 8 || fontsizeInput > 72) {
    alert("Font size must be between 8 and 72.");
    return;
  }

  setCookie("fontsize", fontsizeInput);
  setCookie("fontcolor", fontcolorInput);

  applyPreferences(fontsizeInput, fontcolorInput);
});
