const question = document.querySelector("#Questions");

const start = document.querySelector("#start");

const a = document.querySelector("#Question1");
const b = document.querySelector("#Question2");
const c = document.querySelector("#Question3");

function commencerquiz() {
  question.innerHTML = question1[0].question;
  a.innerHTML = question1[0].answers[0];
  b.innerHTML = question1[0].answers[1];
  c.innerHTML = question1[0].answers[2];
}

function reponse(choix) {}

const question1 = [
  {
    question: "Quel est le président actuel ?",
    answers: ["Emmanuel Macron", "Cristiano Ronaldo", "François Hollande"],
    correct: 0,
  },
];

const question2 = [
  {
    question: "Quelle est l'équipe ayant le plus de league des champions",
    answers: ["Fc Milan", "Réal-Madrid", "Fc Barcelone"],
    correct: 1,
  },
];

const question3 = [
  {
    question: "Qui a gagner la coupe du monde 2022?",
    answers: ["Portugal", "France", "Argentine"],
    correct: 2,
  },
];

const question4 = [
  {
    question: "Qui a gagner le ballon d'or 2012?",
    answers: ["Neymar", "Messi", "Ronaldo"],
    correct: 1,
  },
];

const question5 = [
  {
    question: "Qui  est le champion UFC des moins de 70kg?",
    answers: ["Charles Oliveira", "Ilia Topuria", "Arman Tsyarukyan"],
    correct: 1,
  },
];

start.addEventListener("click", () => commencerquiz());
a.addEventListener("click", () => reponse());
b.addEventListener("click", () => reponse());
c.addEventListener("click", () => reponse());
