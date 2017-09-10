let a = 2

a = 3(() => func(a))()

function func(b) {
  return b
}
