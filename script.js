const question = document.querySelector("#Questions");
const rejouer = document.querySelector("#replay");
const start = document.querySelector("#start");
const scoreValide = document.querySelector("#Score");

const a = document.querySelector("#Question1");
const b = document.querySelector("#Question2");
const c = document.querySelector("#Question3");

rejouer.style.display = "none";
a.style.display = "none";
b.style.display = "none";
c.style.display = "none";

let currentindex = 0;
function commencerquiz() {
  start.style.display = "none";
  a.style.display = "block";
  b.style.display = "block";
  c.style.display = "block";
  if (currentindex < question1.length) {
    question.innerHTML = question1[currentindex].question;
    a.innerHTML = question1[currentindex].answers[0];
    b.innerHTML = question1[currentindex].answers[1];
    c.innerHTML = question1[currentindex].answers[2];
  }
}

let score = 0;

function reponse(choix) {
  if (choix == question1[currentindex].correct) {
    score++;
  }
  scoreValide.innerHTML = "Score : " + score;

  currentindex++;

  commencerquiz();
  if (currentindex == 5) {
    EndoftheGame();
  }
}

function EndoftheGame() {
  question.innerHTML =
    "Vous avez fini le quiz votre score final est de : " + score;
  scoreValide.style.display = "none";
  rejouer.style.display = "block";
 a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
}

function replay() {
  currentindex = 0;
  score = 0;
  question.innerHTML = "";
  scoreValide.innerHTML = "Score : " + score;
  scoreValide.style.display = "block";
  start.style.display = "block";
  rejouer.style.display = "none";
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  a.disabled = false;
  b.disabled = false;
  c.disabled = false;
}

const question1 = [
  {
    question: "Quel est le président actuel ?",
    answers: ["Emmanuel Macron", "Cristiano Ronaldo", "François Hollande"],
    correct: 0,
  },
  {
    question: "Quelle est l'équipe ayant le plus de league des champions",
    answers: ["Fc Milan", "Réal-Madrid", "Fc Barcelone"],
    correct: 1,
  },
  {
    question: "Qui a gagner la coupe du monde 2022?",
    answers: ["Portugal", "France", "Argentine"],
    correct: 2,
  },
  {
    question: "Qui a gagner le ballon d'or 2012?",
    answers: ["Neymar", "Messi", "Ronaldo"],
    correct: 1,
  },
  {
    question: "Qui est le champion UFC des moins de 70kg?",
    answers: ["Charles Oliveira", "Ilia Topuria", "Arman Tsyarukyan"],
    correct: 1,
  },
];

start.addEventListener("click", () => commencerquiz());
a.addEventListener("click", () => reponse(0));
b.addEventListener("click", () => reponse(1));
c.addEventListener("click", () => reponse(2));
rejouer.addEventListener("click", () => replay());
