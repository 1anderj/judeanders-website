function toggleDropdown(id) {
  // Close all dropdowns
  var dropdowns = document.getElementsByClassName("dropdown-links");
  for (var i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].id !== id) {
      dropdowns[i].classList.remove("show");
    }
  }

  // Toggle the requested dropdown
  document.getElementById(id).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-links");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
}
