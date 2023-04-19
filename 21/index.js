import ContactApi from "./ContactApi.js";

const $contactContainer = $("#contactContainer");
const form = document.querySelector("#contactForm");
const inputId = document.querySelector("#id");
const CLASS_EDIT_BTN = "editBtn";
const CLASS_DELETE_BTN = "deleteBtn";
const CLASS_CONTACT_ITEM = "contactItem";
let contactList = [];

form.addEventListener("submit", onFormSubmit);
$contactContainer
  .on("click", "." + CLASS_DELETE_BTN, deleteContactEl)
  .on("click", "." + CLASS_EDIT_BTN, editContactEl);

init();

function onFormSubmit(e) {
  e.preventDefault();

  const contact = getContact();

  if (!isContactValid(contact)) {
    showError(new Error("Невалидные данные"));
    return;
  }

  if (contact.id) {
    updateContact(contact);
  } else {
    createContact(contact);
  }

  clearForm();
}

function init() {
  ContactApi.getList()
    .then((list) => {
      generateContactList(list);
      contactList = list;
    })
    .catch((e) => showError(e));
}

function updateContact(contact) {
  ContactApi.update(contact.id, contact)
    .then((newContact) => {
      replaceContact(contact.id, newContact);
      contactList = contactList.map((contactItem) =>
        contactItem.id === contact.id ? newContact : contactItem
      );
    })
    .catch((e) => showError(e));
}

function createContact(contact) {
  ContactApi.create(contact)
    .then((newContact) => {
      renderContact(newContact);
      contactList.push(newContact);
    })
    .catch((e) => showError(e));
}

function getContact() {
  const id = form.id.value;

  const contact = findContactById(id) || {};

  const result = {
    ...contact,
    name: form.nameInput.value,
    surname: form.surnameInput.value,
    phone: form.phoneInput.value,
  };

  return result;
}

function replaceContact(id, contact) {
  const oldContactEl = document.querySelector(`[data-id='${id}']`);
  const newContactEl = generateContactHtml(contact);

  oldContactEl.outerHTML = newContactEl;
}

function deleteContactEl(e) {
  const contactEL = getContactEl(e.target);
  const id = getContactElId(contactEL);
  ContactApi.delete(id).catch((e) => showError(e));
  contactEL.remove();
  contactList = contactList.filter((contactItem) => contactItem.id !== id);
}

function getContactEl(el) {
  return el.closest("." + CLASS_CONTACT_ITEM);
}

function getContactElId(el) {
  const contactEL = getContactEl(el);
  return contactEL.dataset.id;
}

function generateContactList(list) {
  return list.map(renderContact);
}

function renderContact(contact) {
  const html = generateContactHtml(contact);

  $contactContainer.append(html);
}

function generateContactHtml(contact) {
  const { id, name, surname, phone } = contact;
  return `
    <tr
    class="contactItem"
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

function editContactEl(e) {
  const id = getContactElId(e.target);
  const contact = findContactById(id);
  fillForm(contact);
}

function findContactById(id) {
  return contactList.find((contact) => contact.id === id);
}

function fillForm(contact) {
  const { name, surname, phone, id } = contact;
  form.nameInput.value = name;
  form.surnameInput.value = surname;
  form.phoneInput.value = phone;
  form.id.value = id;
}

function clearForm() {
  inputId.value = "";
  form.reset();
}

function showError(error) {
  alert(error.message);
}

function isContactValid(contact) {
  return (
    contact.name && contact.surname && contact.phone && !isNaN(contact.phone)
  );
}
