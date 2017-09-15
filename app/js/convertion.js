export function cellToFahr (cell) {
  return cell * 9 / 5 + 32
}

export function kmphTpMph (speed) {
  return speed * 0.6213711922
}

export function kmph (speed) {
  return speed * 60 * 60 / 1000
}
