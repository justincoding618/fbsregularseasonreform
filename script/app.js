// Define all the functions first
const showSideBar = function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};
const hideSideBar = function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

$(function () {
  $("#navbar").load("/reusable/navbar.html");
});

const loadHeadFeature = function (rel, File, type = "") {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = File;
  link.type = type;
  document.head.appendChild(link);
};

loadHeadFeature("preconnect", "https://fonts.googleapis.com");
loadHeadFeature("preconnect", "https://fonts.gstatic.com");
loadHeadFeature(
  "stylesheet",
  "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
);
loadHeadFeature("stylesheet", "/css/style.css");
loadHeadFeature(
  "icon",
  "https://images.icon-icons.com/1465/PNG/512/669americanfootball_100217.png",
  "x/image",
);
loadHeadFeature(
  "stylesheet",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
);
