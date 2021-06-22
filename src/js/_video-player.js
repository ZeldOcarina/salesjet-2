import Player from "@vimeo/player";

export default class VideoPlayer {
  constructor(videoPlayer, iframePlaceholder, closeIcon, openBtns) {
    this.videoPlayer = videoPlayer;
    this.iframePlaceholder = iframePlaceholder;
    this.closeIcon = closeIcon;

    this.closeIcon.addEventListener("click", this.closePlayer.bind(this));
    this.openBtns = openBtns;
    this.execute = this.execute.bind(this);
    this.init();
  }

  init() {
    this.execute();
    this.openBtns.forEach((btn) => {
      btn?.addEventListener("click", this.openPlayer.bind(this));
    });
  }

  openPlayer() {
    this.videoPlayer.classList.remove("d-none");
  }

  closePlayer() {
    this.videoPlayer.classList.add("d-none");
    this.currentPlayer.pause();
  }

  handleReady() {
    console.log("ready");
  }

  execute() {
    const options01 = {
      id: 424152266,
      width: "100%",
    };

    this.currentPlayer = new Player("salesjet_features", options01);

    this.currentPlayer.on("play", function () {
      console.log("Played the first video");
    });
  }
}
