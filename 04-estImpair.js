/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Exercice non implémenté : vérifier si n est impair
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  return null;
  if(typeof n !== "number"){
    return null;

  }else if ( n % 2 == 0){
    return false;

  }else{
    return true;
  }
}
console.log( estImpair(16));

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
