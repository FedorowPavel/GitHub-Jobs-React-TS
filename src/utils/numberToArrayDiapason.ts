export default function numberToArrayDiapason(number: number) {
  return new Array(number).fill(true).map((e, i) => i + 1)
}
