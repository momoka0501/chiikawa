function check() {
  let str = [];

  //ラジオボタンの中身を取得
  const q = [document.shitsumon.q0, document.shitsumon.q1, document.shitsumon.q2, document.shitsumon.q3];

  //A・B・Cそれぞれの合計点数を入れるための変数
  var aaa = 0;
  var bbb = 0;
  var ccc = 0;

  //どのラジオボタンが選択されたか判定し、点数を加算
  for (let n = 0; n < q.length; n++) {
    for (let i = 0; i < q[n].length; i++) {
      if (q[n][i].checked) {
        str[n] = q[n][i].value;
        if (str[n] == "A") {
          aaa++;
        } else if (str[n] == "B") {
          bbb++;
        } else if (str[n] == "C") {
          ccc++;
        }
        break;
      }
    }
  }

  
  //コメントの条件分岐
  var message = "";
  if (aaa > bbb && aaa > ccc) {
    message = "はちわれ"
  } else if (bbb > aaa && bbb > ccc) {
    message = "ちいかわ";
  } else if (ccc > aaa && ccc > bbb) {
    message = "うさぎ";
  } else {
    message = "バランスのいいタイプ！特にこれといったキャラはなし"
  }

  //HTMLへ出力
  var html = '<div>';
  html += "あなたのタイプは・・・<br/>"
  html += " " + message + " ";
  html += '</div>';
  document.getElementById("kekka").innerHTML = html;
}

