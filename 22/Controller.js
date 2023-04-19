class Controller {
  constructor($rootEl) {
    this.contactCollection = new Collection();
    this.contactFormView = new ContactFormView({
      onSubmit: this.save.bind(this),
    });
    this.contactListView = new ContactListView({
      onDelete: this.deleteContactEl.bind(this),
      onEdit: (id) => {
        const contact = this.contactCollection.find(id);

        this.contactFormView.setContact(contact);
      },
      onDone: this.toggleDone.bind(this),
    });

    this.contactFormView.appendTo($rootEl);
    this.contactListView.appendTo($rootEl);

    this.contactCollection
      .fetch()
      .then(() => {
        this.contactListView.generateContactList(
          this.contactCollection.getList()
        );
      })
      .catch((e) => showError(e));
  }

  save(contact) {
    if (contact.id) {
      this.contactCollection
        .update(contact.id, contact)
        .then((newContact) => {
          this.contactListView.replaceContact(contact.id, newContact);
        })
        .catch((e) => showError(e));
    } else {
      this.contactCollection
        .create(contact)
        .then((newContact) => {
          this.contactListView.renderContact(newContact);
        })
        .catch((e) => showError(e));
    }

    this.contactFormView.clearForm();
  }

  toggleDone(id) {
    const contact = this.contactCollection.find(id);

    contact.done = !contact.done;

    this.contactCollection.update(id, contact).catch((e) => showError(e));
    this.contactListView.replaceContact(id, contact);
  }

  deleteContactEl(id) {
    this.contactCollection.delete(id).catch((e) => showError(e));
    this.contactListView.removeContact(id);
  }
}
