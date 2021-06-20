import Select from "./_select.js";
import Slider from "./_slider.js";
import { select, slider, slides } from "./model/_model.js";

export function init() {
  new Select(select);
  new Slider(slider, slides);

  console.log("App correctly initiated");
}
