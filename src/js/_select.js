export default class Select {
  constructor(select) {
    this.select = select;
    // this.select.addEventListener("change", this.handleSelectChange.bind(this));
    // this.select.addEventListener(
    //   "focusout",
    //   this.handleSelectChange.bind(this),
    //   true
    //);
  }

  handleSelectChange(e) {
    alert("FIRING!!!!");
    return window.location.assign(`/${e.target.value}`);
  }
}
