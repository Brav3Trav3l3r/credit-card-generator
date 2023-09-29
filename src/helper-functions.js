//https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits
export function cardNumberValidation(val) {
  // let res = val.length == 16 && !isNaN(val); //fails cases where val starts with "+", "-"
  let res = val.length == 16 && /^\d+$/.test(val);
  return res;
}

// https://stackoverflow.com/questions/53427046/how-to-add-space-between-every-4-characters-in-javascript
export function convertCardNumber(val) {
  const arr = val.match(/.{1,4}/g);
  return arr.join(" ");
}

export function monthValidator(val) {
  let res = val > 0 && val <= 12 && /^\d+$/.test(val);
  return res;
}

export function yearValidator(val) {
  let res = val?.length <= 2 && /^\d+$/.test(val);
  return res;
}

export function cvvValidator(val) {
  let res = val.length == 3 && /^\d+$/.test(val);
  return res;
}
