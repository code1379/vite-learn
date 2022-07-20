import { defineComponent } from "vue";
// JSX 这样引入可以，但在 vue-template 的 scope中 @import url("./styles/app.css") 则无效，需要在 main.js 中引入
import "@styles/app.css";
import "@styles/test.less";
import classes from "@styles/test.module.css";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div className="container">
          <h1>Hello vue jsx</h1>
          <p className={classes.moduleClass}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      );
    };
  },
});
