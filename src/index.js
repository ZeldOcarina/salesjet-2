import "core-js/stable";
import { init } from "./js/init.js";

init();

if (module.hot) {
  module.hot.accept();
}
