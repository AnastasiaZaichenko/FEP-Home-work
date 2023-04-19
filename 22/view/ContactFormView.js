class ContactFormView {
  constructor(options) {
    this.$form = this.init();
    this.$inputs = this.$form.find("input, textarea");
    this.options = options;
  }

  init() {
    return $(`
    <form id="contactForm" class="form">
    <input type="text" id="name"    class="formInput" />
    <input type="text" id="surname" class="formInput" />
    <input type="text" id="phone"   class="formInput"  />
    <input type="hidden" id="id" class="formInput"  />

    <button id="addContactBtn">Add Contact</button>
  </form>
    `).on(`submit`, this.onFormSubmit.bind(this));
  }

  onFormSubmit(e) {
    e.preventDefault();

    const contact = this.getContact();

    if (!this.isContactValid(contact)) {
      this.showError(new Error("Невалидные данные"));
      return;
    }

    this.options.onSubmit(contact);
  }

  appendTo($el) {
    $el.append(this.$form);
  }

  getContact() {
    const contact = {};
    for (const input of this.$inputs) {
      contact[input.id] = input.value;
    }
    return contact;
  }

  setContact(contact) {
    for (const input of this.$inputs) {
      input.value = contact[input.id];
    }
  }

  clearForm() {
    for (const input of this.$inputs) {
      input.value = "";
    }
  }

  isContactValid(contact) {
    return (
      contact.name && contact.surname && contact.phone && !isNaN(contact.phone)
    );
  }

  showError(error) {
    alert(error.message);
  }
}
