/**
 * @param {number} num
 * @return {string}
 */
let numberToWords = function (num) {
  const TRILLION = Math.pow(10, 12);
  const BILLION = Math.pow(10, 9);
  const MILLION = Math.pow(10, 6);
  const THOUSAND = 1000;
  const HUNDRED = 100;
  const TWENTY = 20;
  const TEN = 10;

  const dictionary = new Map();
  // ones
  dictionary.set(1, 'One');
  dictionary.set(2, 'Two');
  dictionary.set(3, 'Three');
  dictionary.set(4, 'Four');
  dictionary.set(5, 'Five');
  dictionary.set(6, 'Six');
  dictionary.set(7, 'Seven');
  dictionary.set(8, 'Eight');

  dictionary.set(9, 'Nine');
  dictionary.set(10, 'Ten');
  // teens
  dictionary.set(11, 'Eleven');
  dictionary.set(12, 'Twelve');
  dictionary.set(13, 'Thirteen');
  dictionary.set(14, 'Fourteen');
  dictionary.set(15, 'Fifteen');
  dictionary.set(16, 'Sixteen');
  dictionary.set(17, 'Seventeen');
  dictionary.set(18, 'Eighteen');
  dictionary.set(19, 'Nineteen');
  // tens
  dictionary.set(20, 'Twenty');
  dictionary.set(30, 'Thirty');
  dictionary.set(40, 'Forty');
  dictionary.set(50, 'Fifty');
  dictionary.set(60, 'Sixty');
  dictionary.set(70, 'Seventy');
  dictionary.set(80, 'Eighty');
  dictionary.set(90, 'Ninety');
  const wordBuilder = num => {
    if (num >= TRILLION) {
      let trillions = Math.floor(num / TRILLION);
      let rest = num % TRILLION;
      return `${wordBuilder(trillions)} Trillion${
        rest > 0 ? ' ' + wordBuilder(rest) : ''
      }`;
    } else if (num >= BILLION) {
      let billions = Math.floor(num / BILLION);
      let rest = num % BILLION;
      return `${wordBuilder(billions)} Billion${
        rest > 0 ? ' ' + wordBuilder(rest) : ''
      }`;
    } else if (num >= MILLION) {
      let millions = Math.floor(num / MILLION);
      let rest = num % MILLION;
      return `${wordBuilder(millions)} Million${
        rest > 0 ? ' ' + wordBuilder(rest) : ''
      }`;
    } else if (num >= THOUSAND) {
      let thousands = Math.floor(num / THOUSAND);
      let rest = num % THOUSAND;
      return `${wordBuilder(thousands)} Thousand${
        rest > 0 ? ' ' + wordBuilder(rest) : ''
      }`;
    } else if (num >= HUNDRED) {
      let hundreds = Math.floor(num / HUNDRED);
      let rest = num % HUNDRED;
      return `${wordBuilder(hundreds)} Hundred${
        rest > 0 ? ' ' + wordBuilder(rest) : ''
      }`;
    } else if (num >= TWENTY) {
      let tens = Math.floor(num / TEN) * TEN;
      let rest = num % TEN;
      return `${dictionary.get(tens)}${
        rest > 0 ? ' ' + wordBuilder(rest) : ''
      }`;
    } else {
      return dictionary.get(num);
    }
  };
  return num === 0 ? 'Zero' : wordBuilder(num);
};

console.log(numberToWords(123));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));
