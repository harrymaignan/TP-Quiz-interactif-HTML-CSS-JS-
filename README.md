# TP-Quiz-interactif-HTML-CSS-JS-


TP – Quiz interactif (HTML / CSS / JS)
Dans ce TP, vous allez développer une application web simple de type quiz interactif en
utilisant les technologies fondamentales du développement web : HTML, CSS et JavaScript.
L’objectif est de vous apprendre à construire une application dynamique fonctionnant dans
un navigateur, où l’utilisateur peut interagir avec l’interface (répondre à des questions,
obtenir un score, voir un résultat final).
Ce projet sera réalisé en groupe et versionné avec GitHub afin de simuler une organisation
de travail proche de celle utilisée en entreprise.
Règle importante
- Vous devez avancer dans l’ordre des étapes
- Une étape doit fonctionner avant de passer à la suivante
- Chaque élève doit participer à chaque étape (au moins une fonction JS)
Organisation groupe
● Tous les élèves participent au JavaScript
● Chaque élève doit coder des fonctions différentes
● Commits obligatoires sur GitHub
ÉTAPE 1 — Créer la structure du projet
Travail demandé :
● créer les fichiers :
○ index.html
○ style.css
○ script.js
● connecter les fichiers entre eux
HTML minimum :
● un titre
● une zone pour afficher les questions
● une zone pour les réponses
● une zone pour le score
ÉTAPE 2 — Créer les données du quiz
(JS)
Objectif : stocker les questions
Dans script.js :
const questions = [
{
question: "Quelle est la capitale de la France ?",
answers: ["Paris", "Lyon", "Marseille"],
correct: 0
}
];
Travail demandé :
● ajouter au moins 5 questions
● vérifier que la structure est correcte
ÉTAPE 3 — Afficher une question
Objectif : afficher du contenu dans la page
Travail demandé :
● afficher la première question dans le HTML
● afficher les réponses
Indices :
● utiliser document.querySelector
● utiliser innerHTML
ÉTAPE 4 — Rendre les réponses
cliquables
Objectif : interaction utilisateur
Travail demandé :
● transformer les réponses en boutons
● détecter un clic
À utiliser :
● addEventListener("click")
ÉTAPE 5 — Vérifier les réponses + score
Objectif : logique du jeu
Travail demandé :
● vérifier si la réponse est correcte
● ajouter +1 au score si correct
● passer à la question suivante
Variables utiles :
let score = 0;
let currentIndex = 0;
ÉTAPE 6 — Fin du quiz
Objectif : terminer le jeu proprement
Travail demandé :
● quand il n’y a plus de questions :
○ afficher “fin du quiz”
○ afficher le score final
BONUS (si vous avez fini ou groupe de
4)
● bouton “Rejouer”
● barre de progression
● minuterie (10 secondes par question)
● design amélioré
GitHub obligatoire
Projet sur GitHub :
● commits fréquents
● commits par étape (pas tout à la fin)
● messages clairs
Livrable
Un projet fonctionnel avec :
● quiz jouable
● score affiché
● fin de jeu
● code JS compréhensible
Évaluation
Critère Points
Étapes
fonctionnelles
/10
JavaScript /6
Travail en groupe /2
GitHub /2
