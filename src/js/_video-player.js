import Player from "@vimeo/player";

export default class VideoPlayer {
  constructor(videoPlayer, iframePlaceholder, closeIcon, openBtns) {
    this.videoPlayer = videoPlayer;
    this.iframePlaceholder = iframePlaceholder;
    this.closeIcon = closeIcon;
    this.openBtns = openBtns;
    this.init();
    this.listenForTestimonialsCards();
  }

  async init() {
    this.closeIcon.addEventListener("click", this.closePlayer.bind(this));

    const promise = new Promise((resolve, reject) => {
      document.addEventListener("TestimonialsCardsCreated", (e) => {
        const playIcons = document.querySelectorAll(".testimonial-card__play");
        this.openBtns = [...this.openBtns, ...playIcons];
        resolve(this.openBtns);
      });
    });

    await promise;

    this.openBtns.forEach((btn) => {
      btn?.addEventListener("click", this.openPlayer.bind(this));
    });
  }

  openPlayer(e) {
    this.currentPlayer = new Player("video-player", {
      id: e.target.dataset.videoId,
      width: "100%",
    });

    document.addEventListener("keydown", (e) => {
      if (!e.key === "Escape") return;
      this.closePlayer();
    });

    this.videoPlayer.classList.remove("d-none");
  }

  async closePlayer() {
    this.videoPlayer.classList.add("d-none");
    await this.currentPlayer.pause();
    await this.currentPlayer.destroy();
    this.currentPlayer = null;
  }

  listenForTestimonialsCards() {}
}
