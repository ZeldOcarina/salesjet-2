export default class Slider {
  constructor(slider, slides) {
    this.slider = slider;
    this.slides = slides;
    this.btnLeft = slider.querySelector(".slider__btn--left");
    this.btnRight = slider.querySelector(".slider__btn--right");
    this.dotContainer = slider.querySelector(".dots");
    this.currentSlide = 0;
    this.touchstartX = 0;
    this.touchendX = 0;
    this.maxSlide = slides.length;
    this.setupSlider();

    this.slider.addEventListener("touchstart", (e) => {
      this.touchstartX = e.changedTouches[0].screenX;
    });

    this.slider.addEventListener("touchend", (e) => {
      this.touchendX = e.changedTouches[0].screenX;
      this.handleGesture();
    });
  }

  handleGesture() {
    if (this.touchendX < this.touchstartX) return this.nextSlide();
    if (this.touchendX > this.touchstartX) return this.prevSlide();
  }

  setupSlider() {
    //this.slider.style.transform = "scale(0.5)";
    this.slider.style.overflow = "hidden";

    this.goToSlide(0);

    this.btnRight.addEventListener("click", this.nextSlide.bind(this));
    this.btnLeft.addEventListener("click", this.prevSlide.bind(this));
    document.addEventListener("keydown", (e) => {
      e.key === "ArrowLeft" && this.prevSlide();
      e.key === "ArrowRight" && this.nextSlide();
    });
    this.createDots();
    this.dotContainer.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        this.goToSlide(slide);
        this.activateDot(slide);
      }
    });
    this.activateDot(0);
  }

  createDots() {
    this.slides.forEach((_, i) => {
      this.dotContainer.insertAdjacentHTML(
        "beforeend",
        /*html*/ `
            <button class="dots__dot" data-slide="${i}"></button>
        `
      );
    });
  }

  activateDot(slide) {
    this.dots = document.querySelectorAll(".dots__dot");
    this.dots.forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  }

  nextSlide() {
    if (this.currentSlide === this.maxSlide - 1) this.currentSlide = 0;
    else this.currentSlide++;

    this.goToSlide(this.currentSlide);
    this.activateDot(this.currentSlide);
  }

  prevSlide() {
    if (this.currentSlide === 0) this.currentSlide = this.maxSlide - 1;
    else this.currentSlide--;
    this.goToSlide(this.currentSlide);
    this.activateDot(this.currentSlide);
  }

  goToSlide(slide) {
    this.slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }
}
