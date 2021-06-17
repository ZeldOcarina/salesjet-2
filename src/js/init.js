import Select from "./_select.js";
import { select } from "./model/_model.js";

export function init() {
  new Select(select);

  console.log("App correctly initiated");
}
