export default class Animations {
  constructor(navLinks, mobileNavbar, navbarItems, hamburger, closeNavbarIcon) {
    this.hamburger = hamburger;
    this.mobileNavbar = mobileNavbar;
    this.navbarItems = navbarItems;
    this.navLinks = navLinks;
    this.closeNavbarIcon = closeNavbarIcon;
    this.navSmoothScrolling();
    this.mobileNavbar;

    this.hamburger.addEventListener("click", this.activateNavbar.bind(this));
    this.closeNavbarIcon.addEventListener("click", this.closeNavbar.bind(this));
    this.navbarItems.addEventListener("click", this.handleNavClick.bind(this));
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

  activateNavbar(e) {
    this.mobileNavbar.style.transform = "translateY(0)";
  }

  closeNavbar(e) {
    this.mobileNavbar.style.transform = "translateY(-100vh)";
  }

  handleNavClick(e) {
    if (!e.target.classList.contains("navbar__link")) return;
    e.preventDefault();
    this.closeNavbar();

    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }, 600);
  }
}
