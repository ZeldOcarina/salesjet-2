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
    this.player.stopVideo();
  }

  handleReady() {
    console.log("ready");
  }

  execute() {
    // window.YT.ready(() => {
    //   this.player = new window.YT.Player("video-player__iframe", {
    //     height: "360",
    //     width: "640",
    //     videoId: "4QaW9_7gzuQ",
    //     suggestedQuality: "hd1080",
    //     events: {
    //       //onReady: () => {
    //       //  console.log("Ready is called");
    //       //},
    //       //onStateChange: onPlayerStateChange,
    //     },
    //     playerVars: {
    //       origin: window.location.href,
    //     },
    //   });
    // });

    var options01 = {
      id: 424152266,
      width: "100%",
    };

    var video01Player = new Player("salesjet_features", options01);

    video01Player.setVolume(0);

    video01Player.on("play", function () {
      console.log("Played the first video");
    });
  }
}
