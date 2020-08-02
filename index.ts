let team = localStorage.getItem("tosswinner");
console.log("Toss won", team);
(document.getElementById("result") as HTMLInputElement).disabled = true;
class Timer {
  constructor(public counter = 60) {
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      //console.log(this.counter)
      var timer = document.getElementById("timer") as HTMLInputElement;
      timer.innerHTML = `${this.counter}`;
      if (this.counter === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}
switch (team) {
  case "csk":
    console.log("Current Team:", team);
    (document.getElementById("mi") as HTMLInputElement).disabled = true;
    document.querySelector(".hitcsk")?.addEventListener("click", function () {
      function between(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let score = between(0, 6);
      cskscoreboard(score);
    });
    new Timer();
    setTimeout(mi, 61000);
    break;
  case "mi":
    console.log("Current Team:", team);
    (document.getElementById("csk") as HTMLInputElement).disabled = true;
    document.querySelector(".hitmi")?.addEventListener("click", function () {
      function between(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let score = between(0, 6);
      miscoreboard(score);
    });
    new Timer();
    setTimeout(csk, 61000);
    break;
  default:
    console.log("No such day exists!");
    break;
}

function mi() {
  // alert("mi");
  team = "mi";
  console.log("Current Team:", team);
  (document.getElementById("csk") as HTMLInputElement).disabled = true;
  (document.getElementById("mi") as HTMLInputElement).disabled = false;
  document.querySelector(".hitmi")?.addEventListener("click", function () {
    function between(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let score = between(0, 6);
    miscoreboard(score);
  });
  new Timer();
}
function csk() {
  // alert("csk");
  team = "csk";
  console.log("Current Team:", team);
  (document.getElementById("mi") as HTMLInputElement).disabled = true;
  (document.getElementById("csk") as HTMLInputElement).disabled = false;
  document.querySelector(".hitcsk")?.addEventListener("click", function () {
    function between(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let score = between(0, 6);
    cskscoreboard(score);
  });
  new Timer();
}
let cskTotal = 0;
let miTotal = 0;
let cell = "";
let i = 0;
let j = 0;
let cskstart = 21;
let mistart = 21;
let playerTotal = 0;
let eachplayer = [0];
let eachball = [0];
let res = 0;
let cskscore=[0];
let miscore=[0];
//csk scoreboard
function cskscoreboard(score) {
 // console.log("current score csk",score);
  cskTotal = score + cskTotal;
  //console.log("cskTotal", cskTotal);
  if (`${cell}` == "cell95" && j == 4) {
    score = 0;
  }
  if (score !== 0) {
    cell = `cell${cskstart + i}`;
    if (`${cell}` == "cell95" && i == 4) {
      score = 0;
     return; 
    }
    let hit = document.getElementById(cell) as HTMLInputElement;
    hit.innerText = score;

    //sum of each player
    eachball.push(score);
    let playerTotal = document.getElementById(
      `cell${cskstart + 6}`
    ) as HTMLInputElement;
    i++;
    //console.log(eachball)
    let res = eachball.reduce(function (a, b) {
      return a + b;
    }, 0);
    cskscore.push(res);
    playerTotal.innerText = `${res}`;
    if (i == 6) {
      eachball = [0];
    }
    if (i > 5) {
      cskstart += 10;
      i = 0;
    }
  } else {
    //console.log("start",cskstart);
    //console.log("i",i);
    cell = `cell${cskstart + i}`;
    let hit = document.getElementById(cell) as HTMLInputElement;
    hit.innerText = score;

    //sum of each player
    let playerTotal = document.getElementById(
      `cell${cskstart + 6}`
    ) as HTMLInputElement;
    //console.log(eachball);
    let res = eachball.reduce(function (a, b) {
      return a + b;
    }, 0);
    cskscore.push(res);
    playerTotal.innerText = `${res}`;
    eachball = [0];

    cskstart += 10;
    i = 0;
  }
  if (cskstart === 121) {
    (document.getElementById("csk") as HTMLInputElement).disabled = true;
  }
}

function miscoreboard(score) {
 // console.log("Current score MI",score);
  miTotal = score + miTotal;
  //console.log("mitotal", miTotal);
  if (`${cell}` == "cellmi95" && j == 4) {
    //console.log(cell);
    score = 0;
  }
  if (score !== 0) {
    cell = `cellmi${mistart + j}`;
    if (`${cell}` == "cellmi95" && j == 4) {
      score = 0;
      return; 
    }
    let hit = document.getElementById(cell) as HTMLInputElement;
    hit.innerText = score;

    //sum of each player
    eachplayer.push(score);
    let playerTotal = document.getElementById(
      `cellmi${mistart + 6}`
    ) as HTMLInputElement;
    j++;
    let res = eachplayer.reduce(function (a, b) {
      return a + b;
    }, 0);
    miscore.push(res);
    playerTotal.innerText = `${res}`;
    if (j == 6) {
      eachplayer = [0];
    }
    if (j > 5) {
      j = 0;
      mistart += 10;
    }
  } else {
    //console.log("start",mistart);
    //console.log("j",j);
    cell = `cellmi${mistart + j}`;
    let hit = document.getElementById(cell) as HTMLInputElement;
    hit.innerText = score;

    //sum of each player
    let playerTotal = document.getElementById(
      `cellmi${mistart + 6}`
    ) as HTMLInputElement;
    let res = eachplayer.reduce(function (a, b) {
      return a + b;
    }, 0);
    miscore.push(res);
    playerTotal.innerText = `${res}`;
    eachplayer = [0];

    mistart += 10;
    j = 0;
  }
  if (mistart === 121) {
    (document.getElementById("mi") as HTMLInputElement).disabled = true;
  }
}

setTimeout(() => {
  let final = document.getElementById("timer") as HTMLInputElement;
  console.log(final.innerText);
  (document.getElementById("result") as HTMLInputElement).disabled = false;
  if (final.innerText === "0") {
    (document.getElementById("csk") as HTMLInputElement).disabled = true;
    (document.getElementById("mi") as HTMLInputElement).disabled = true;
  }
  
}, 122000);

(document.getElementById("result") as HTMLInputElement).addEventListener(
  "click",
  function () {
   /*  if (cskTotal > miTotal){
      alert(`CSK Won the Match  Total Score=${cskTotal}`);
    } 
    else {
      alert(`MI Won the Match Total Score=${miTotal}`);
    } */
    localStorage.setItem("cskTotal", `${cskTotal}`);
    localStorage.setItem("miTotal", `${miTotal}`);
    window.location.href='resultpage.html'
  }
);
