const uniButton = document.getElementById("uni-button");
const sportButton = document.getElementById("sport-button");
const mangaButton = document.getElementById("manga-button");
const birthButton = document.getElementById("birth-button");
const answerButton = document.getElementById("answer-button");
const problemInput = document.getElementById("problem-Input");
const feedback = document.getElementById("feedback");
mangaButton.onclick = function () {
  window.location.href = "https://kingdom-anime.com/";
};
uniButton.onclick = function () {
  window.location.href = "https://www.tokushima-u.ac.jp/";
};
sportButton.onclick = function () {
  window.location.href =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdEWte8uQOWBbDulFrQCSZ6QI4msz3QKV9w&usqp=CAU";
};
birthButton.onclick = function () {
  window.location.href =
    "https://yappari-okayama.com/wp/wp-content/themes/yappari_theme/img/okayamabasyo.jpg";
};
answerButton.onclick = function () {
  feedback.textContent = "";
  if (problemInput === "ボクシング" || "boxing") {
    feedback.textContent = "正解!!週3で通っています";
  } else {
    feedback.textContent = "残念（；；）もう一回挑戦してみて！";
  }
  problemInput.value = "";
};
