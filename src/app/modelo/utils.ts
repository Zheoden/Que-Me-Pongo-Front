export function upperCaseFirstLetter(cadena: string) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

export function lowerCaseAllWordsExceptFirstLetters(cadena: string) {
  return cadena.replace(/\w\S*/g, word => {
    return word.charAt(0) + word.slice(1).toLowerCase();
  });
}

export function formatString(cadena: string) {
  return upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(cadena));
}
