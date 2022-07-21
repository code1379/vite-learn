import { createApp } from 'vue';
import './style.css';
import App from './App.jsx';
// wasm
// ! 我的 wasm 没法用，不过没关系，我又不用
// import init from "../fib.wasm";

// init().then((m) => {
//   console.log("m", m.fib(10));
// });

// json
// import { name } from "../package.json";
// console.log("name", name);

// worker
// import Worker from "./worker?worker";

// const worker = new Worker();
// worker.onmessage = function (e) {
//   console.log("e", e);
// };

console.log('import.meta.env', import.meta.env, import.meta.env.VITE_NAME);

const globalModules = import.meta.glob('./glob/*');
console.log('globalModules', globalModules);

Object.entries(globalModules).forEach(([k, v]) => {
  console.log('k', k);
  console.log('v', v);
  v().then((m) => console.log(m.default));
});

createApp(App).mount('#app');
