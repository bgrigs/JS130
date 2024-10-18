// Encrypted Pioneers
// The following list contains the names of individuals who are pioneers in the field of computing or that have had a significant influence on the field. The names are in an encrypted form, though, using a simple (and incredibly weak) form of encryption called Rot13.

/*
-declare a var called alphabet and assign to an array that contains every letter in alphabetic order

- iterate through the encrypted name
*/

const encryptedNames = [
  "Nqn Ybirynpr",
  "Tenpr Ubccre",
  "Nqryr Tbyqfgvar",
  "Nyna Ghevat",
  "Puneyrf Onoontr",
  "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
  "Wbua Ngnanfbss",
  "Ybvf Unvog",
  "Pynhqr Funaaba",
  "Fgrir Wbof",
  "Ovyy Tngrf",
  "Gvz Orearef-Yrr",
  "Fgrir Jbmavnx",
  "Xbaenq Mhfr",
  "Fve Nagbal Ubner",
  "Zneiva Zvafxl",
  "Lhxvuveb Zngfhzbgb",
  "Unllvz Fybavzfxv",
  "Tregehqr Oynapu"
];

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function getChar(char) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  char = char.toLowerCase();

  if (!alphabet.includes(char)) return char;

  return decryptChar(alphabet, char)
}

function decryptChar(alphabet, char) {
  let alphabetIndex = alphabet.indexOf(char);
  let rotateBy = 13;
  let decryptedChar;

  if (alphabetIndex < rotateBy) {
    decryptedChar = alphabet[alphabetIndex + rotateBy];
  } else {
    decryptedChar = alphabet[alphabetIndex - rotateBy];
  }

  return decryptedChar;
}

function getDecryptedName(encryptedName) {
  let decryptedName = '';

  for (let char of encryptedName) {
    let decryptedChar = getChar(char);
    if (isUpperCase(char)) {
      decryptedName += decryptedChar.toUpperCase();
    } else decryptedName += decryptedChar;
  }

  return decryptedName;
}

encryptedNames.forEach(name => console.log(getDecryptedName(name)));