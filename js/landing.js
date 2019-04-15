$(function () {

  var num_bgs_available = 11;
  var num_bgs_displayed = 2;
  var available_bgs = []
  var delay_ms = 30 * 1000;
  var new_bgs = []
  var current_bgs = []


  for (var i = 0; i < num_bgs_available; i++) {

    s = (i + 1).toString();
    while (s.length < 3) {
      s = "0" + s
    }

    s = s + ".png"

    available_bgs.push(s);

  }

  current_bgs = available_bgs.slice(0, num_bgs_displayed);
  set_backgrounds(current_bgs);
  setTimeout(change_backgrounds, delay_ms)

  function get_new_backgrouds() {

    var choices = available_bgs.slice();

    //filtering out current backgrounds
    for (var i = 0; i < current_bgs.length; i++) {
      var x = choices.indexOf(current_bgs[i])
      if (x !== -1) choices.splice(x, 1);
    }

    //refresh choices to default if we dot have enough. repeats possible
    if (choices.length < num_bgs_displayed) {
      choices = available_bgs.slice();
    }

    choices = shuffle(choices);
    new_bgs = choices.slice(0, num_bgs_displayed)


  }

  function set_backgrounds() {
    for (var i = 0; i < new_bgs.length; i++) {
      var n = "bg" + i.toString();
      var img = document.getElementById(n);
      img.src = "img/bg/" + new_bgs[i];
    }

  }

  function change_backgrounds() {
    get_new_backgrouds();
    $(".bg").fadeOut('fast', set_backgrounds);
    $(".bg").fadeIn('fast');
    current_bgs = new_bgs;
    setTimeout(change_backgrounds, delay_ms)

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