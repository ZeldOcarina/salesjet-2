export default class LinkHandler {
  constructor() {
    this.links = document.querySelectorAll(
      'a[href="https://cabin.salesjet.io/register"]'
    );

    this.links.forEach((link) =>
      link.addEventListener("click", this.addQueryParamsToLinks.bind(this))
    );
  }

  addQueryParamsToLinks(e) {
    e.preventDefault();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let stringQueryParams = "";
    for (const [key, value] of Object.entries(params)) {
      stringQueryParams += `${key}=${value}&`;
    }
    const rootUrl = e.target.getAttribute("href");
    const newStringUrl = `${rootUrl}?${stringQueryParams}`;
    const newUrl = newStringUrl.substring(0, newStringUrl.length - 1);
    location.assign(newUrl);
  }
}
