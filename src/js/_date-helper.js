export default class DateHelper {
  constructor() {
    this.yearSpans = document.querySelectorAll(".current-year");
    this.yearSpans.forEach(
      (yearSpan) => (yearSpan.textContent = new Date().getFullYear())
    );
  }
}
