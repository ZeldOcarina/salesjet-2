export default class Select {
  constructor(select) {
    this.select = select;
    this.select.addEventListener("change", this.handleSelectChange.bind(this));
  }

  handleSelectChange(e) {
    return window.location.assign(`/${e.target.value}`);
  }
}
