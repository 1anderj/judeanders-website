function dropdownLists() {
  document.getElementById("lists-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownInteractive() {
  document.getElementById("interactive-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function dropdownAbout() {
  document.getElementById("about-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}