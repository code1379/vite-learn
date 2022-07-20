// https://www.assemblyscript.org/introduction.html
// https://www.assemblyscript.org/getting-started.html#setting-up-a-new-project
// pnpm install --save-dev assemblyscript
// npx asc assemb.ts --outFile fib.wasm --optimize
export function fib(n: i32): i32 {
  var a = 0,
    b = 1;
  if (n > 0) {
    while (--n) {
      let t = a + b;
      a = b;
      b = t;
    }
    return b;
  }
  return a;
}
