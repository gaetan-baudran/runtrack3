function bisextile(annee) {

    if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
        console.log('true'); // true
      return true;
    } else {
        console.log('false'); // false
      return false;
    }
  }


let annee = 2023;

console.log(bisextile (annee));

