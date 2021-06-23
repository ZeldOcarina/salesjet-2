import Animations from "./_animations.js";
import LinkHandler from "./_link-handler.js";
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
  navLinks,
} from "./model/_model.js";

export function init() {
  new Animations(navLinks);
  new LinkHandler();
  new Select(select);
  new Slider(slider, slides);
  new VideoPlayer(videoPlayer, iframePlaceholder, closeIcon, openBtns);

  console.log("App correctly initiated");
}
