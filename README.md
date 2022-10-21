# ExerciceCrewbooking

## Fichiers index.html et index.js
C'est la manière donc nous avons approché le javascript durant la formation front-end du Cepegra.
Seuls le nombre et le button sont ajoutés dynamiquement via le script dans la fonction render.
Le problème de cette méthode, c'est que je ne pouvais pas ajouter facilement un second compteur puisque cela ne fonctionne pas comme un composant.

## Fichiers refactoring.html, main.js et refactoring.js
J'ai repris les fonctionnalités développées avec l'autre méthode pour les implémenter dans une class.
Cette class est exportée et importée dans le main.js qui le transforme en un compposant custom, appelé ensuite dans le refactoring.html
Cette méthode permet de pouvoir dupliquer à sa guise le composant "counter".
