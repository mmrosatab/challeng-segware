export function emptyOrOnlySpaces(username, password) {
  return username.trim().length === 0 || password.trim().length === 0;
}

export function usernameIsEmpty(username) {
  return username.length === 0 || username.trim().length === 0;
}
