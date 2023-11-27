const mountains = [
  [2, 2],
  [4, 9],
  [6, 4],
  [9, 10],
  [10, 6],
];
const elements = [
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    image: "images/water.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    image: "images/house.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    image: "images/tree.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    image: "images/farm.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    image: "images/tree.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    image: "images/house.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    image: "images/farm.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
    image: "images/house.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    image: "images/house.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    image: "images/farm.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    image: "images/farm.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    image: "images/water.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    image: "images/water.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    image: "images/tree.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    image: "images/tree.png",
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    image: "images/water.png",
    rotation: 0,
    mirrored: false,
  },
];
elements.sort(() => Math.random() - 0.5);
const missions = [
  {
    title: "Az erdő széle",
    image: "missions/AzErdoSzele.png",
    function: "AzErdoSzele",
  },
  {
    title: "Álmos-völgy",
    image: "missions/AlmosVolgy.png",
    function: "AlmosVolgy",
  },
  {
    title: "Krumpliöntözés",
    image: "missions/Krumpliontozes.png",
    function: "Krumpliontozes",
  },
  {
    title: "Határvidék",
    image: "missions/Hatarvidek.png",
    function: "Hatarvidek",
  },
  {
    title: "Fasor",
    image: "missions/Fasor.png",
    function: "Fasor",
  },
  {
    title: "Öntözőcsatorna",
    image: "missions/Ontozocsatorna.png",
    function: "Ontozocsatorna",
  },
  {
    title: "Gazdag Város",
    image: "missions/GazdagVaros.png",
    function: "GazdagVaros",
  },
  {
    title: "Mágusok Völgye",
    image: "missions/MagusokVolgye.png",
    function: "MagusokVolgye",
  },
  {
    title: "Üres Telek",
    image: "missions/UresTelek.png",
    function: "UresTelek",
  },
  {
    title: "Sorház",
    image: "missions/Sorhaz.png",
    function: "Sorhaz",
  },
  {
    title: "Páratlan Silók",
    image: "missions/ParatlanSilok.png",
    function: "ParatlanSilok",
  },
  {
    title: "Gazdag Vidék",
    image: "missions/GazdagVidek.png",
    function: "GazdagVidek",
  },
];
missions.sort(() => Math.random() - 0.5);
let actMis = missions.slice(0, 4);
const seasons = [
  {
    name: "Tavasz",
    missions: ["A", "B"],
  }, {
    name: "Nyár",
    missions: ["B", "C"],
  }, {
    name: "Ősz",
    missions: ["C", "D"],
  }, {
    name: "Tél",
    missions: ["D", "A"],
  },];
let gameMatrix = [];

const maxTime = 28;
let actualTime = 0;
let actualSeasonTime = 7;
let score = 0;
let actualSeasonScore = 0;
let actualSeasonIndex = 0;
let actualIndex = 0;
let actualElement = elements[actualIndex];
let missionLetters = ["A", "B", "C", "D"];

const gameTable = document.querySelector("#gameTable");
const missionsDiv = document.querySelector("#missionsDiv");
const gameSide = document.querySelector("#gameSide");
const timeH2 = document.querySelector("#gameSide h2");
const elementTable = document.querySelector("#elementTable");
const elementTime = document.querySelector("#elementTime b");
const gameTime = document.querySelector("#gameTime");
const seasonTime = document.querySelector("#seasonTime");
const seasonName = document.querySelector("#seasonName");
const rotationBtn = document.querySelector("#rotationBtn");
const mirrorBtn = document.querySelector("#mirrorBtn");
const scoreB = document.querySelector("#score b");

//alap tábla lehelyezés
function newGame() {
  gameTable.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    gameMatrix[i] = [];
    const tr = document.createElement("tr");
    for (let j = 0; j < 11; j++) {
      gameMatrix[i][j] = {
        type: "nothing",
        image: "images/nothing.png",
      };
      const td = document.createElement("td");
      td.id = i + "_" + j;
      mountains.forEach((e) => {
        if (i + 1 == e[0] && j + 1 == e[1]) {
          gameMatrix[i][j] = {
            type: "mountain",
            image: "images/mountain.png",
          };
        }
      });
      if (gameMatrix[i][j].type == "nothing") {
        td.style.backgroundColor = gameMatrix[i][j].image;
      } else {
        td.style.backgroundImage = "url(" + gameMatrix[i][j].image + ")";
      }

      tr.append(td);
    }
    gameTable.append(tr);
  }
  dragAndDrop();
}

//tabla kirajzolasa
function drawTable() {
  gameTable.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 11; j++) {
      const td = document.createElement("td");
      td.id = i + "_" + j;
      td.style.backgroundImage = "url(" + gameMatrix[i][j].image + ")";
      tr.append(td);
    }
    gameTable.append(tr);
  }
  dragAndDrop();
}

//küldetések random
function drawmissionsDiv() {
  missionsDiv.innerHTML = "";
  let i = 0;
  let div = document.createElement("div");
  (actMis).forEach((e) => {
    if (i % 2 == 0) {
      div = document.createElement("div");
      div.classList.add("rowDiv");
    }
    const missionDiv = document.createElement("div");
    missionDiv.id = missionLetters[i];
    const img = document.createElement("img");
    img.src = e.image;
    img.alt = e.title;
    actMis[i].letter = missionLetters[i];
    actMis[i].points = [];
    const span = document.createElement("span");
    span.style.display = "none";
    missionDiv.append(img);
    missionDiv.append(span);
    div.append(missionDiv);
    if (i % 2 == 1) {
      missionsDiv.append(div);
    }
    i++;
  });
  if (actualSeasonIndex == 0) {
    document.querySelector("#A").classList.add("tavasz");
    document.querySelector("#B").classList.add("tavasz");
  }
}

//elemek random
function drawElementTable() {
  elementTable.innerHTML = "";
  let i = 0;
  actualElement.shape.forEach((e) => {
    const tr = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");
      td.id = i + "" + j;
      if (e[j] == 1) {
        td.style.backgroundImage = "url(" + (actualElement.image) + ")";
      } else {
        td.style.border = "none";
        td.style.backgroundImage = "none";
      }
      tr.append(td);
    }
    elementTable.append(tr);
    i++;
  });
  elementTable.classList.add("elementBG");
  elementTime.innerHTML = actualElement.time;
  elementTable.setAttribute("draggable", true);
}

//elem drag and drop lehelyezés
function dragAndDrop() {
  const gameTableTds = document.querySelectorAll("#gameTable td");
  gameTableTds.forEach(td => {
    td.addEventListener("dragover", (ev) => {
      ev.preventDefault();
    })
  });
  elementTable.addEventListener("mousedown", (ev) => {
    globalThis.draggedTdId = ev.target.id;
  });

  elementTable.addEventListener("dragstart", (ev) => {
    ev.currentTarget.classList.remove("elementBG");
    document.querySelector("#elementTime").style.display = "none";
    ev.dataTransfer.setData("text", ev.target.id);

  });
  gameTableTds.forEach(td => {
    td.addEventListener("drop", (ev) => {
      ev.preventDefault();
      document.querySelector("#elementTime").style.display = "inline";
      let ij = (ev.target.id).split("_");
      let startI = ij[0] - draggedTdId[0];
      let startJ = ij[1] - draggedTdId[1];
      //lehelyezés
      let values = check(startI, startJ, ij);
      if (values[0]) {
        values[1].forEach((e) => {
          gameMatrix[e[0]][e[1]].type = actualElement.type;
          gameMatrix[e[0]][e[1]].image = actualElement.image;
        });
      }
      if (values[0]) {
        actualTime += actualElement.time;
        actualSeasonTime -= actualElement.time;
        actualIndex++;
        actualElement = elements[actualIndex];
        if (actualTime < maxTime) {
          gameTime.innerHTML = maxTime - actualTime;
        } else {
          timeH2.innerHTML = "Vége a játéknak!";
          document.querySelector("#inGameDiv").style.display = "none";
        }
        if (actualSeasonTime <= 0) { //évszak váltás
          seasonChange();
        }
        seasonTime.innerHTML = actualSeasonTime;

      }
      drawTable();
      drawElementTable();
    })
  });
  save();
}

//ellenőrzés
function check(startI, startJ, ij) {
  let ok = true;
  let shape = [];
  actualElement.shape.forEach((e) => {
    for (let j = 0; j < 3; j++) {
      if (e[j] == 1) {
        if (startI < 0 || startI > 10 || startJ < 0 || startJ > 10) {
          ok = false;
        } else {
          if (gameMatrix[startI][startJ].type !== "nothing") {
            ok = false;
          }
        }
        shape.push([startI, startJ]);
      }
      startJ++;
    }
    startI++;
    startJ = ij[1] - draggedTdId[1];
  });
  return [ok, shape];
}

//evszakvaltas
function seasonChange() {
  let seasonClass = ["tavasz", "nyar", "osz", "tel"];
  actualSeasonScore = 0;
  let actSeason = seasons[actualSeasonIndex];
  document.querySelector("#" + actSeason.missions[0]).classList.remove(seasonClass[actualSeasonIndex]);
  document.querySelector("#" + actSeason.missions[1]).classList.remove(seasonClass[actualSeasonIndex]);
  actMis.forEach((m) => {
    if (m.letter == actSeason.missions[0] || m.letter == actSeason.missions[1]) {
      m.points.push(eval(m.function + "()"));
    }
  })
  document.querySelector("." + seasonClass[actualSeasonIndex] + " b").innerHTML = actualSeasonScore;
  if (actualTime < maxTime) {
    actualSeasonIndex++;
    actSeason = seasons[actualSeasonIndex];
    document.querySelector("#" + actSeason.missions[0]).classList.add(seasonClass[actualSeasonIndex]);
    document.querySelector("#" + actSeason.missions[1]).classList.add(seasonClass[actualSeasonIndex]);
    seasonName.innerHTML = seasons[actualSeasonIndex].name;
    actualSeasonTime = actualSeasonTime + 7;
    elements.sort(() => Math.random() - 0.5);
    actualIndex = 0;
    actualElement = elements[actualIndex];
  } else {
    HegyBekerites();
    scoreB.innerHTML = score;
    let i = 0;
    actMis.forEach((m) => {
      document.querySelector("#" + missionLetters[i] + " span").style.display = "inline";
      document.querySelector("#" + missionLetters[i] + " span").innerHTML = "Pont: <b>" + m.points[0] + "</b> + <b>" + m.points[1] + "</b>";
      i++;
    });
    localStorage.clear();
  }
}

//forgatás
rotationBtn.addEventListener("click", () => {
  actualElement.shape = (actualElement.shape).map((val, index) => (actualElement.shape).map(row => row[row.length - 1 - index]));
  actualElement.rotation = true;
  drawElementTable();
});

//tükrözés
mirrorBtn.addEventListener("click", () => {
  actualElement.shape = (actualElement.shape).map(function (arr) { return arr.reverse(); });
  actualElement.mirrored = true;
  drawElementTable();
});

//missions
function HegyBekerites() {
  let p = 0;
  mountains.forEach((e) => {
    let count = 0;
    let i = e[0] - 1;
    let j = e[1] - 1;
    gameMatrix[i][j]
    if (i - 1 >= 0 && j - 1 >= 0) {
      if (gameMatrix[i - 1][j].type != "nothing") {
        count++;
      }
    }
    if (j - 1 >= 0) {
      if (gameMatrix[i][j - 1].type != "nothing") {
        count++;
      }
    }
    if (j + 1 < 11) {
      if (gameMatrix[i][j + 1].type != "nothing") {
        count++;
      }
    }
    if (i + 1 < 11) {
      if (gameMatrix[i + 1][j].type != "nothing") {
        count++;
      }
    }
    if (count == 4) {
      p++;
    }
  });
  score += p;
}
function AzErdoSzele() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    if (gameMatrix[0][i].type == "forest") {
      p++;
    } if (gameMatrix[len][i].type == "forest") {
      p++;
    }
  }
  for (let j = 1; j < len; j++) {
    if (gameMatrix[j][0].type == "forest") {
      p++;
    } if (gameMatrix[j][len].type == "forest") {
      p++;
    }

  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function AlmosVolgy() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let sum = 0;
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[i][j].type == "forest") {
        sum++;
      }
    }
    if (sum == 3) {
      p += 4;
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function Krumpliontozes() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[i][j].type == "farm") {
        if (i - 1 >= 0) {
          if (gameMatrix[i - 1][j].type == "water") {
            p += 2;
          }
        } if (j - 1 >= 0) {
          if (gameMatrix[i][j - 1].type == "water") {
            p += 2;
          }
        } if (j + 1 < 11) {
          if (gameMatrix[i][j + 1].type == "water") {
            p += 2;
          }
        } if (i + 1 < 11) {
          if (gameMatrix[i + 1][j].type == "water") {
            p += 2;
          }
        }
      }
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function Hatarvidek() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let sumRow = 0;
    let sumCol = 0;
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[i][j].type != "nothing") {
        sumRow++;
      }
    }
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[j][i].type != "nothing") {
        sumCol++;
      }
    }
    if (sumRow == 11) {
      p += 6;
    } if (sumCol == 11) {
      p += 6;
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function Fasor() {
  let max = 0;
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let count = 0;
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[j][i].type == "forest") {
        count++;
      } else {
        if (count > max) {
          max = count
        }
        count = 0;
      }
    }
  }
  p = max * 2;
  actualSeasonScore += p;
  score += p;
  return p;
}
function Ontozocsatorna() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let farm = 0;
    let water = 0;
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[j][i].type == "farm") {
        farm++;
      } else if (gameMatrix[j][i].type == "water") {
        water++;
      }
    }
    if (farm > 0 && farm == water) {
      p += 4;
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function GazdagVaros() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      let townNeighbours = [];
      if (gameMatrix[i][j].type == "town") {
        if (i - 1 >= 0) {
          if (gameMatrix[i - 1][j].type != "nothing") {
            if (!(townNeighbours.includes(gameMatrix[i - 1][j].type))) {
              townNeighbours.push(gameMatrix[i - 1][j].type);
            }
          }
        } if (j - 1 >= 0) {
          if (gameMatrix[i][j - 1].type != "nothing") {
            if (!(townNeighbours.includes(gameMatrix[i][j - 1].type))) {
              townNeighbours.push(gameMatrix[i][j - 1].type);
            }
          }
        } if (j + 1 < 11) {
          if (gameMatrix[i][j + 1].type != "nothing") {
            if (!(townNeighbours.includes(gameMatrix[i][j + 1].type))) {
              townNeighbours.push(gameMatrix[i][j + 1].type);
            }
          }
        } if (i + 1 < 11) {
          if (gameMatrix[i + 1][j].type != "nothing") {
            if (!(townNeighbours.includes(gameMatrix[i + 1][j].type))) {
              townNeighbours.push(gameMatrix[i + 1][j].type);
            }
          }
        }
      }
      if (townNeighbours.length >= 3) {
        p += 3;
      }
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function MagusokVolgye() {
  let p = 0;
  mountains.forEach((e) => {
    let i = e[0] - 1;
    let j = e[1] - 1;
    gameMatrix[i][j]
    if (i - 1 >= 0) {
      if (gameMatrix[i - 1][j].type == "water") {
        p += 3;
      }
    }
    if (j - 1 >= 0) {
      if (gameMatrix[i][j - 1].type == "water") {
        p += 3;
      }
    }
    if (j + 1 < 11) {
      if (gameMatrix[i][j + 1].type == "water") {
        p += 3;
      }
    }
    if (i + 1 < 11) {
      if (gameMatrix[i + 1][j].type == "water") {
        p += 3;
      }
    }
  });
  actualSeasonScore += p;
  score += p;
  return p;
}
function UresTelek() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[i][j].type == "town") {
        if (i - 1 >= 0) {
          if (gameMatrix[i - 1][j].type == "nothing") {
            p += 2;
          }
        } if (j - 1 >= 0) {
          if (gameMatrix[i][j - 1].type == "nothing") {
            p += 2;
          }
        } if (j + 1 < 11) {
          if (gameMatrix[i][j + 1].type == "nothing") {
            p += 2;
          }
        } if (i + 1 < 11) {
          if (gameMatrix[i + 1][j].type == "nothing") {
            p += 2;
          }
        }
      }
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function Sorhaz() {
  let max = 0;
  let p = 0;
  let c = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let count = 0;
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[i][j].type == "town") {
        count++;
      } else {
        if (count > max) {
          max = count
          c = 0;
        }
        if (count == max) {
          c++;
        }
        count = 0;
      }
    }
  }
  p = max * c * 2;
  console.log(p);
  actualSeasonScore += p;
  score += p;
  return p;
}
function ParatlanSilok() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let sumCol = 0;
    for (let j = 0; j <= len; j++) {
      if ((i + 1) % 2 == 1 && gameMatrix[j][i].type != "nothing") {
        sumCol++;
      }
    } if (sumCol == 11) {
      p += 10;
    }
  }
  actualSeasonScore += p;
  score += p;
  return p;
}
function GazdagVidek() {
  let p = 0;
  let len = gameMatrix.length - 1;
  for (let i = 0; i <= len; i++) {
    let difElements = [];
    for (let j = 0; j <= len; j++) {
      if (gameMatrix[i][j].type != "nothing" && !(difElements.includes(gameMatrix[i][j].type))) {
        difElements.push(gameMatrix[i][j].type);
      }
    }
    if (difElements.length >= 5) {
      p += 4;
    }
    difElements = [];
  }
  actualSeasonScore += p;
  score += p;
  return p;
}

//localStorage
/*if (window.localStorage.length > 0) {
  document.querySelector("#seasonsTable").innerHTML = JSON.parse(localStorage.getItem('seasonsTable'));
  actMis = JSON.parse(localStorage.getItem('actMis'));
  gameMatrix = JSON.parse(localStorage.getItem('gameMatrix'));
  actualTime = localStorage.getItem('actualTime');
  gameTime.innerHTML = maxTime - actualTime;
  actualSeasonTime = localStorage.getItem('actualSeasonTime');
  seasonTime.innerHTML = actualSeasonTime;
  score = localStorage.getItem('score');
  actualSeasonScore = localStorage.getItem('actualSeasonScore');
  actualSeasonIndex = localStorage.getItem('actualSeasonIndex');
  seasonName.innerHTML = seasons[actualSeasonIndex].name;
  actualIndex = localStorage.getItem('actualIndex');
  actualElement = JSON.parse(localStorage.getItem('actualElement'));
  drawTable();
  drawElementTable();
  drawmissionsDiv();
} else {
  newGame();
  drawElementTable();
  drawmissionsDiv();
}*/

function save() {
  localStorage.clear();
  localStorage.setItem('seasonsTable', JSON.stringify(document.querySelector("#seasonsTable").innerHTML));
  localStorage.setItem("actMis", JSON.stringify(actMis));
  localStorage.setItem("gameMatrix", JSON.stringify(gameMatrix));
  localStorage.setItem("actualTime", actualTime);
  localStorage.setItem("actualSeasonTime", actualSeasonTime);
  localStorage.setItem("score", score);
  localStorage.setItem("actualSeasonScore", actualSeasonScore);
  localStorage.setItem("actualSeasonIndex", actualSeasonIndex);
  localStorage.setItem("actualIndex", actualIndex);
  localStorage.setItem("actualElement", JSON.stringify(actualElement));
}

newGame();
drawElementTable();
drawmissionsDiv();