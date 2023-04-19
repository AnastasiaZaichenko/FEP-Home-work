class ContactListView {
  static DELETE_BTN = ".deleteBtn";
  static EDIT_BTN = ".editBtn";
  static SELECTOR_CONTACT_ITEM = ".contactItem";
  constructor(options) {
    this.$contactEl = this.init();
    this.options = options;
  }
  appendTo($el) {
    $el.prepend(this.$contactEl);
  }

  init() {
    return $(`<tbody id="contactContainer"></tbod y>`)
      .on("click", ContactListView.DELETE_BTN, this.onDeleteBtnClick.bind(this))
      .on("click", ContactListView.EDIT_BTN, this.onEditBtnClick.bind(this))
      .on(
        "click",
        ContactListView.SELECTOR_CONTACT_ITEM,
        this.onItemClick.bind(this)
      );
  }

  onItemClick(e) {
    const id = this.getContactElId(e.target);
    this.options.onDone(id);
  }

  onEditBtnClick(e) {
    e.stopPropagation();

    const id = this.getContactElId(e.target);
    this.options.onEdit(id);
  }

  onDeleteBtnClick(e) {
    e.stopPropagation();

    const id = this.getContactElId(e.target);
    this.options.onDelete(id);
  }

  getContactElId(el) {
    return el.closest(ContactListView.SELECTOR_CONTACT_ITEM).dataset.id;
  }

  replaceContact(id, contact) {
    const oldContactEl = this.$contactEl.find(`[data-id='${id}']`);
    const newContactEl = this.generateContactHtml(contact);

    oldContactEl.replaceWith(newContactEl);
  }

  generateContactList(list) {
    const html = list.map(this.generateContactHtml).join("");

    this.$contactEl.html(html);
  }

  renderContact(contact) {
    const html = this.generateContactHtml(contact);

    this.$contactEl.append(html);
  }

  generateContactHtml(contact) {
    const done = contact.done ? " done " : "";
    const { id, name, surname, phone } = contact;
    return `
      <tr
      class="contactItem${done}" 
      data-id="${id}"
      >
        <td>${name}</td>
        <td>${surname}</td>
        <td>${phone}</td>
        <td><span><button type="button" class="editBtn">Edit</button></span></td>
        <td><span><button type="button" class="deleteBtn">Delete</button></span></td>
      </tr>
    `;
  }

  removeContact(id) {
    this.$contactEl.find(`[data-id='${id}']`).remove();
  }
}
