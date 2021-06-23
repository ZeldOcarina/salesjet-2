export default class Animations {
  constructor(navLinks) {
    this.navLinks = navLinks;
    this.navSmoothScrolling();
  }

  navSmoothScrolling() {
    this.navLinks.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href");
        if (id === "https://kb.salesjet.io/en") return location.assign(id);

        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}
