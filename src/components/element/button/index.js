/**
 * 该文件为组件注册install方法，以便在vue全局中使用
 */
import Button from "./src/Button";

Button.install = (Vue) => {
  Vue.component(Button.name, Button);
};

export default Button;
