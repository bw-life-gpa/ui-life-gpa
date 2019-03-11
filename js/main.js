//================================================================= Page Nav
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.content[data-tab='${this.data}']`
    );
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const linkTab = document.querySelectorAll(`.link`);
    linkTab.forEach(function(linkTab) {
      linkTab.classList.remove(`change`);
    });
    this.element.classList.toggle(`change`);
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(`.content`);
    items.forEach(items => items.classList.remove("change"));
    this.element.classList.toggle("change");
  }
}

let links = document.querySelectorAll(`.link`).forEach(link => new TabLink(link));
console.log(links);
//=================================================================

//================================================================= Carousel