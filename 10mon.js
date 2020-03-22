"use strict";

var con = [];

document.getElementById("str").onclick = function() {
  con.length = 0;
  var seiton = [];
  var list = [];

  // 式
  for (var kai = 0; kai < 10; kai++) {
    for (var i = 0; i < 2; i++) {
      var random = Math.ceil(Math.random() * 100);
      seiton.push(random);
    }
    // 最大＋最少
    seiton.sort(function(a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });

    var kotae = seiton[0] + seiton[1];
    con.push(kotae);

    // 式の右寄せ＆空白埋め
    var mae = ("   " + seiton[0]).substr(-3);
    var usiro = ("   " + seiton[1]).substr(-3);
    var matome = mae + " +" + usiro + " =";

    // まとめる
    var item =
      matome +
      '<input  class="nyuryoku" type="text" value=""></input>' +
      '<span class="toumei">' +
      kotae +
      "</span>" +
      "<br>";
    list.push(item);

    // seitonリストを空のする
    seiton.length = 0;
  }
  // 式表示
  document.getElementById("siki").innerHTML = list.join("");
};

var sai = [];
document.getElementById("hyouji").onclick = function() {
  var aka = document.getElementsByClassName("nyuryoku");
  for (var a = 0; a < aka.length; a++) {
    sai.push(aka[a].value);
  }

  var to = document.getElementsByClassName("toumei");
  for (var i = 0; i < to.length; i++) {
    // 正解
    if (sai[i] == con[i]) {
      to[i].style.opacity = 100;
      to[i].innerHTML = "OK";
      to[i].style.color = "#0f0";
      // 不正解
    } else if (sai[i] != con[i]) {
      to[i].style.opacity = 100;
      to[i].style.color = "#f00";
    }
  }
  // リストを空にする
  sai.length = 0;
  con.length = 0;
};
