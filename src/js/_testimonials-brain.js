import TestimonialCard from "./_testimonial-card.js";

export default class TestimonialsBrain {
  constructor({ root, data }) {
    this.testimonialsContainer = root;
    this.testimonialsData = data;

    this.setupCards();
  }

  setupCards() {
    this.testimonialsContainer.innerHTML = this.testimonialsData
      .map((testimonial) => {
        return new TestimonialCard(testimonial).html;
      })
      .join("");

    const event = new Event("TestimonialsCardsCreated");
    document.dispatchEvent(event, { bubbles: true });
    console.log("EVENT DISPATCHED!");
  }
}
