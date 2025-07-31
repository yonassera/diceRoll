function funName() {
  //   let rand1 = 1,
  //     rand2 = 1;

  //   while (rand1 === rand2) {
  //     rand1 = Math.floor(Math.random() * 6) + 1;
  //     rand2 = Math.floor(Math.random() * 6) + 1;
  //   }

  let rand1 = Math.floor(Math.random() * 6) + 1;
  let rand2 = Math.floor(Math.random() * 6) + 1;

  let dice1 = "dice" + rand1;
  let dice2 = "dice" + rand2;
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "../Dicee Challenge - Starting Files/images/" + dice1 + ".png"
    );
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "../Dicee Challenge - Starting Files/images/" + dice2 + ".png"
    );

  if (rand1 > rand2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (rand1 < rand2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
