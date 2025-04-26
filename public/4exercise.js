document.addEventListener("DOMContentLoaded", () => {
  const a = 7
  const b = 11
  const c = 15
  const d = 21
  const e = 8
  const f = 10
  const g = 16
  const h = 20
  const i = 9
  const j = 8

  const result1 = a + b * c - d / e
  const result2 = f + g * h - i / j
  const highestNumber = result1 > result2 ? result1 : result2
  alert("4exercise: The highest result is: " + highestNumber)
})
