import Animations from "./_animations.js";
import LinkHandler from "./_link-handler.js";
import Select from "./_select.js";
import Slider from "./_slider.js";
import VideoPlayer from "./_video-player.js";
import DateHelper from "./_date-helper.js";

import {
  select,
  slider,
  slides,
  videoPlayer,
  iframePlaceholder,
  closeIcon,
  openBtns,
  navLinks,
  mobileNavbar,
  navbarItems,
  closeNavbarIcon,
  hamburger,
} from "./model/_model.js";

export function init() {
  new Animations(
    navLinks,
    mobileNavbar,
    navbarItems,
    hamburger,
    closeNavbarIcon
  );
  new LinkHandler();
  new Select(select);
  new Slider(slider, slides);
  new VideoPlayer(videoPlayer, iframePlaceholder, closeIcon, openBtns);
  new DateHelper();

  console.log("App correctly initiated");
}
