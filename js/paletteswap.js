$(function () {

  palette_default();

});


function next_palette() {

  var palettes = [{
    "name": "mint",
    "id": 0,
    "background-color": "#94e3c3",
    "color": "#333333",
    "banner": "0.png",
    "link": "#94e3c3"
  }, {
    "name": "crimson",
    "id": 1,
    "background-color": "#a5174b",
    "color": "#FEFEFE",
    "banner": "1.png",
    "link": "#a5174b"
  }, {
    "name": "blue",
    "id": 2,
    "background-color": "#474782",
    "color": "#FEFEFE",
    "banner": "2.png",
    "link": "#474782"
  }, {
    "name": "smoke",
    "id": 3,
    "background-color": "#969fb2",
    "color": "#FEFEFE",
    "banner": "3.png",
    "link": "#969fb2"
  }, {
    "name": "sky",
    "id": 4,
    "background-color": "#24b2a2",
    "color": "#333333",
    "banner": "4.png",
    "link": "#24b2a2"
  }, {
    "name": "thunder",
    "id": 5,
    "background-color": "#020202",
    "color": "#f1bb61",
    "banner": "5.png",
    "link": "#020202"
  }, {
    "name": "pink",
    "id": 6,
    "background-color": "#958aa9",
    "color": "#000000",
    "banner": "6.png",
    "link": "#958aa9"
  }, {
    "name": "orange",
    "id": 7,
    "background-color": "#e6d290",
    "color": "#333333",
    "banner": "7.png",
    "link": "#e6d290"
  },
  ];


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


  var background = $('.swapable-background');
  background.css("background-color", palette["background-color"]);

  var links = $('.swap-link');
  links.css("color", palette['link'])

  banner.src = "img/banner/" + palette["banner"];
}

function palette_default() {
  var palettes = [{
    "name": "mint",
    "id": 0,
    "background-color": "#94e3c3",
    "color": "#333333",
    "banner": "0.png",
    "link": "#94e3c3"
  }, {
    "name": "crimson",
    "id": 1,
    "background-color": "#a5174b",
    "color": "#FEFEFE",
    "banner": "1.png",
    "link": "#a5174b"
  }, {
    "name": "blue",
    "id": 2,
    "background-color": "#474782",
    "color": "#FEFEFE",
    "banner": "2.png",
    "link": "#474782"
  }, {
    "name": "smoke",
    "id": 3,
    "background-color": "#969fb2",
    "color": "#FEFEFE",
    "banner": "3.png",
    "link": "#969fb2"
  }, {
    "name": "sky",
    "id": 4,
    "background-color": "#24b2a2",
    "color": "#333333",
    "banner": "4.png",
    "link": "#24b2a2"
  }, {
    "name": "thunder",
    "id": 5,
    "background-color": "#020202",
    "color": "#f1bb61",
    "banner": "5.png",
    "link": "#020202"
  }, {
    "name": "pink",
    "id": 6,
    "background-color": "#958aa9",
    "color": "#000000",
    "banner": "6.png",
    "link": "#958aa9"
  }, {
    "name": "orange",
    "id": 7,
    "background-color": "#e6d290",
    "color": "#333333",
    "banner": "7.png",
    "link": "#e6d290"
  },
  ];

  palettes = shuffle(palettes);

  var banner = document.getElementById("banner");

  set_palette(banner, palettes[0])

}

function shuffle(array) {
  var m = array.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}