$(function() {

  var num_bgs_available = 8;
  var num_bgs_displayed = 2;
  var available_bgs = []
  var delay_ms = 30000;

  for (var i = 0; i < num_bgs; i++) {

    s = (i + 1).toString();
    while (s.length < 3) {
      s = "0" + s
    }

    s = s + ".png"

    available_bgs.push(s);

  }
  
  var current_bgs = available_bgs.slice(0, num_bgs_displayed);
  set_backgrounds(current_bgs);
  setTimeout(change_backgrounds(available_bgs, current_bgs), delay_ms)

  function get_new_backgrouds(available_bgs, current_bgs) {

    var choices = available_bgs.slice();

    //filtering out current backgrounds
    var i0 = current_bgs[0];
    var i1 = current_bgs[1];
    if (i0 !== -1) choices.splice(i0, 1);
    if (i1 !== -1) choices.splice(i1, 1);

    choices = shuffle(choices);
    return choices.slice(0, num_bgs_displayed)


  }
  
  function set_backgrounds(new_bgs) {
    for (var i = 0; i < new_bgs.length; i++) {
      var bg = "bg" + toString(i);
      var img = document.getElementById(bg);
      img.src = "img/bg/" + new_bgs[i];
    }
  }
  
  function change_backgrounds(available_bgs, current_bgs){
    
    var new_bgs = get_new_backgrouds(available_bgs, current_bgs);
    //fade out
    set_backgrounds(new_bgs);
    //fade_in
    setTimeout(change_backgrounds(available_bgs, new_bgs), delay_ms)
    
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

  


});