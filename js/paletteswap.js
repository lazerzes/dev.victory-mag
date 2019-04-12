$(function() {
  
  var palettes = array({
    "name": "light",
    "id": 0,
    "backgound-color": "#9EE1B7",
    "color": "#333333",
    "banner": "1.png"
  }, {
    "name": "dark",
    "id": 1,
    "background-color": "#8F0F3F",
    "color": "#FEFEFE",
    "banner": "2.png"
  });
  
  var curr = 0; 
  var p = next_palette(0, palettes);
  console.log("pal next-> 0:", p);
  p = next_palette(1, palettes);
  console.log("pal next-> 1:", p);
  
  function next_palette(index, palettes){
    
    index++;
    c = index % palettes.length;
    
    return palettes[c];
    
  }

});