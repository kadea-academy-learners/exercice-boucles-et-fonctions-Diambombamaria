/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  
  let nombreDeVoyelle = 0;
  for (let i = 0; i < phrase.length; i++)
  {
    if(phrase[i] == 'a')
    {
      nombreDeVoyelle++;
    }
    else if(phrase[i] == 'e')
    {
      nombreDeVoyelle++;
    }
     else if(phrase[i] == 'i')
    {
      nombreDeVoyelle++;
    }
    
      else if(phrase[i] == 'o')
    {
      nombreDeVoyelle++;
    }
    
      else if(phrase[i] == 'u')
    {
      nombreDeVoyelle++;
    }
       else if(phrase[i] == 'y')
    {
      nombreDeVoyelle++;
    }
  }
return nombreDeVoyelle;
}

console.log(nombreDeVoyelles(pharmacie));
// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
