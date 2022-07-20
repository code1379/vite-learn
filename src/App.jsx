import { defineComponent } from "vue";
// JSX 这样引入可以，但在 vue-template 的 scope中 @import url("./styles/app.css") 则无效，需要在 main.js 中引入
import "@styles/app.css";
import "@styles/test.less";
import classes from "@styles/test.module.css";

import { a } from "./types/test.ts";
import logoPath from "@/assets/vue.svg";

// url 静态资源
import test1 from "./types/test.ts?url";
import test2 from "./types/test.ts?raw";
console.log("from url", test1);
console.log("from raw", test2);

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="container">
          <h1>Hello vue jsx {a.name}</h1>
          <img src={logoPath} alt="" />
          <p className={classes.moduleClass}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      );
    };
  },
});
