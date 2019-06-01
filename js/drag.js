let dragItem = document.querySelector("#map");
let deco = document.querySelector("#map-deco");
let MapInfo = document.querySelector("#map-info");
let LeftInfo = document.querySelector("#left-info");
let infoWidth = MapInfo.offsetWidth;
let container = document.querySelector("#map-container");

function containerSize() {
  infoWidth = MapInfo.offsetWidth - 60;
  container.style.width = infoWidth + 'px';
  container.style.height = infoWidth + 'px';
  if (window.innerWidth <= 992) {
    LeftInfo.style.height = (infoWidth - 50) + 'px';
  } else {
    LeftInfo.style.height = infoWidth + 'px';
  } 
}

window.addEventListener('resize', function() {
  containerSize();
});

containerSize();