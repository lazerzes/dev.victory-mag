$(function () {

  palette_default();

});


function next_palette() {

  var palettes = [{
    "name": "light",
    "id": 0,
    "background-color": "#9EE1B7",
    "color": "#333333",
    "banner": "0.png",
    "link": "#9EE1B7"
  }, {
    "name": "dark",
    "id": 1,
    "background-color": "#8F0F3F",
    "color": "#FEFEFE",
    "banner": "1.png",
    "link": "#8F0F3F"
  }];


  var banner = document.getElementById("banner");
  var filename = banner.src.substring(banner.src.lastIndexOf('/') + 1);
  var curr = parseInt(filename.slice(0, -4));

  curr++;
  curr = curr % palettes.length;
  set_palette(banner, palettes[curr]);



}

function set_palette(banner, palette) {

  var swapable = $('.swapable');
  swapable.css("background-color", palette["background-color"]);
  swapable.css("color", palette["color"]);

  var links = $('.swap-link');
  links.css("color", palette['link'])

  banner.src = "img/banner/" + palette["banner"];
}

function palette_default() {
  p = {
    "name": "light",
    "id": 0,
    "background-color": "#9EE1B7",
    "color": "#333333",
    "banner": "0.png"
  }

  var banner = document.getElementById("banner");

  set_palette(banner, p)

}