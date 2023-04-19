class Collection {
  static DEFAULT_CONTACT = {
    done: false,
  };
  #contactList = [];

  fetch() {
    return ContactApi.getList().then((list) => {
      this.#contactList = list;
    });
  }

  delete(id) {
    this.deleteContactItem(id);
    ContactApi.delete(id);

    return Promise.resolve();
  }

  create(contact) {
    return ContactApi.create({
      ...Collection.DEFAULT_CONTACT,
      ...contact,
    }).then((newContact) => {
      this.addContactItem(newContact);
      return newContact;
    });
  }

  update(id, contact) {
    return ContactApi.update(id, contact).then((newContact) => {
      this.editContactItem(contact.id, newContact);
      return newContact;
    });
  }

  deleteContactItem(id) {
    this.#contactList = this.#contactList.filter(
      (contactItem) => contactItem.id !== id
    );
  }

  getList() {
    return this.#contactList;
  }

  editContactItem(id, contact) {
    this.#contactList = this.#contactList.map((contactItem) =>
      contactItem.id === id ? contact : contactItem
    );
  }

  addContactItem(contact) {
    this.#contactList.push(contact);
  }

  find(id) {
    return this.#contactList.find((contact) => contact.id === id);
  }
}
