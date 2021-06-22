import Select from "./_select.js";
import Slider from "./_slider.js";
import VideoPlayer from "./_video-player.js";

import {
  select,
  slider,
  slides,
  videoPlayer,
  iframePlaceholder,
  closeIcon,
  openBtns,
} from "./model/_model.js";

export function init() {
  new Select(select);
  new Slider(slider, slides);
  new VideoPlayer(videoPlayer, iframePlaceholder, closeIcon, openBtns);

  console.log("App correctly initiated");
}
