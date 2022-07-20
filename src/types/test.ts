import type { A } from './types';

declare const enum Num {
  First = 0,
  Second = 1,
}

export const a: A = {
  name: 'Jocky'
  // * 提供 "--isolatedModules" 标志时，无法访问环境常量枚举。ts(2748)

  // age: Num.First,
};

// ! 尽量避免这样写
// ! "isolatedModules": true, 我加了这个还是不会报错
export { A };
