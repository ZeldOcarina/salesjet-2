export default class TestimonialCard {
  constructor(testimonial) {
    this.testimonial = testimonial;
    this.languageLink = this.setFlagString();
    this.html = this.buildCard(this.testimonial);
  }

  setFlagString() {
    switch (this.testimonial.language) {
      case "english":
        return "https://cdn.salesjet.io/1/funnel_files/15/854_uk.gif";
      case "italian":
        return "https://cdn.salesjet.io/1/funnel_files/15/853_italy.gif";
      default:
        return "";
    }
  }

  buildCard({ name, role, image: { src, alt }, videoId, description }) {
    return /*html*/ `<div class="testimonial-card">
          <div class="testimonial-card__image-container">
            <img
              class="testimonial-card__img"
              src="${src}"
              alt="${alt}"
            />
            <img
              class="testimonial-card__play"
              src="https://cdn.salesjet.io/1/funnel_files/15/797_play-circle-filled.svg"
              alt="Play"
              data-video-id="${videoId}"
            />
          </div>
          <div class="testimonial-card__text-container">
            <p class="testimonial-card__description">
              ${description}
            </p>
            <p class="testimonial-card__name">${name}</p>
            <p class="testimonial-card__hat">
              ${role}
            </p>
          </div>
          
          <img class="testimonial-card__flag" src="${this.languageLink}">
        </div>`;
  }
}
