const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  //split by each 10 symbol
  expr = expr.match(/.{10}/g);
  expr.forEach(function (e, i) {
    let re = /\*\*\*\*\*\*\*\*\*\*/;
    //replace 10 => . | 11 => - | ********** => " "
    while (expr[i].match(10) || expr[i].match(11) ||re.test(expr[i])) {
      expr[i] = expr[i].replace(10, ".").replace(11, "-").replace(re, " ");
    }
    //clear zeros
    while (expr[i].match(0)) {
      expr[i] = expr[i].replace(0, "");
    }
    //change morse code to letters
    if (expr[i] !== " ") {
      expr[i] = MORSE_TABLE[expr[i]];
    }
  })
  //return string
  return expr.join("");
}

module.exports = {
  decode
}
