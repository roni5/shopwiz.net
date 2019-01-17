import * as _ from "lodash";

// import { _ } from "./lodash-extended"; format = (m:number | string )
export let format = (m) => {
  // round, and clamp the number. Then split and find dollars and cents
  let sp = _.split(_.round(_.clamp(m, 0, 9999.99), 2), '.'),
  dollars = _.padStart(sp[0], 4, '0'),
  cents = _.padEnd(sp[1] || 0, 2, '0');

  return '$' + dollars + '.' + cents;

};

console.log( format(Infinity) ); // $9999.99
console.log( format(.005) ); // $0000.01
console.log( format(1234.56) ); // $1234.56
console.log(format(0)); // $0000.00

