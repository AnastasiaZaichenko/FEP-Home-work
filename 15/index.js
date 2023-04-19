class Tabs {
  static BTN_ITEM = "nav-item";
  static BTN_ITEM_ACTIVE = "nav-item-active";
  static CONTENT_ITEM = "content-item";
  static CONTENT_ITEM_ACTIVE = "content-item-active";
  static FIRST_ITEM = 0;

  constructor(tabsEl, options) {
    this.options = {
      defaultOpenIndex: Tabs.FIRST_ITEM,
      ...options,
    };

    this.tabsEl = tabsEl;
    this.navItems = Array.from(this.tabsEl.querySelector("nav").children);
    this.contentItems = Array.from(this.tabsEl.querySelector("div").children);
    this.bindStyles();
    this.bindEvents();
    this.addContent(this.options.defaultOpenIndex);
  }

  bindStyles() {
    this.navItems.forEach((btnEl) => {
      btnEl.classList.add(Tabs.BTN_ITEM);
    });

    this.contentItems.forEach((contentEl) => {
      contentEl.classList.add(Tabs.CONTENT_ITEM);
    });
  }

  bindEvents() {
    this.tabsEl.addEventListener("click", this.onRootElClick.bind(this));
  }

  onRootElClick(e) {
    const target = e.target;
    const btnEl = this.findBtnEl(target);
    const indexBtn = this.findIndexEl(this.navItems, btnEl);
    if (!btnEl) {
      return;
    }

    const openContent = this.findContentOpenEl();
    const indexContent = this.findIndexEl(this.contentItems, openContent);

    if (openContent) {
      this.removeContent(indexContent);
    }
    this.addContent(indexBtn);
  }

  findBtnEl(el) {
    return el.closest("." + Tabs.BTN_ITEM);
  }

  findIndexEl(arr, el) {
    return arr.indexOf(el);
  }

  findContentOpenEl() {
    return this.tabsEl.querySelector("." + Tabs.CONTENT_ITEM_ACTIVE);
  }

  addContent(index) {
    this.contentItems[index].classList.add(Tabs.CONTENT_ITEM_ACTIVE);
    this.navItems[index].classList.add(Tabs.BTN_ITEM_ACTIVE);
  }

  removeContent(index) {
    this.contentItems[index].classList.remove(Tabs.CONTENT_ITEM_ACTIVE);
    this.navItems[index].classList.remove(Tabs.BTN_ITEM_ACTIVE);
  }
}
