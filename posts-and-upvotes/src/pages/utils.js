import moment from "moment";

export function emptyOrOnlySpaces(username, password) {
  return username.trim().length === 0 || password.trim().length === 0;
}

export function usernameIsEmpty(username) {
  return username.length === 0 || username.trim().length === 0;
}

export function dateFormatter(date) {
  const check = moment(date, "YYYY/MM/DD/HH:mm");
  const month = check.format("MM");
  const day = check.format("DD");
  const year = check.format("YYYY");
  const hour = check.format("HH");
  const min = check.format("mm");

  const newDate = `${day}-${month}-${year} ${hour}h${min}`;

  return newDate;
}
