const question = document.querySelector("#Questions");

const start = document.querySelector("#start");
const scoreValide= document.querySelector("#Score")

const a = document.querySelector("#Question1");
const b = document.querySelector("#Question2");
const c = document.querySelector("#Question3");

let currentindex = 0;
function commencerquiz() {
  if (currentindex < question1.length){
      question.innerHTML = question1[currentindex].question;
      a.innerHTML = question1[currentindex].answers[0];
      b.innerHTML = question1[currentindex].answers[1];
      c.innerHTML = question1[currentindex].answers[2];
  }
 
}


let score=0;

function reponse(choix) {
  
  

  if(choix==question1[currentindex].correct){
    
    score++
   
  }
  else{
    score=0
  }
  scoreValide.innerHTML = "Score : " + score;

  currentindex++;
  commencerquiz();
  
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
  }
];

start.addEventListener("click", () => commencerquiz());
a.addEventListener("click", () => reponse(0) );
b.addEventListener("click", () => reponse(1));
c.addEventListener("click", () => reponse(2));
