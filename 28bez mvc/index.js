const studentContainer = document.querySelector("#studentContainer");
const form = document.querySelector("#studentForm");
const inputId = document.querySelector("#id");
const CLASS_EDIT_BTN = "editBtn";
const CLASS_DELETE_BTN = "deleteBtn";
const CLASS_STUDENT_MARK = "markInput";
const input = document.querySelector(".formInput");
let studentList = [];

form.addEventListener("submit", onFormSubmit);
studentContainer.addEventListener("click", onStudentContainerClick);
studentContainer.addEventListener("focusout", onStudentContainerFocusout);

init();

function onStudentContainerFocusout(e) {
  e.preventDefault();
  const target = e.target;
  if (isFosucOut(target)) {
    const input = findInput(target);
    const student = findStudentEl(input);
    const markIndex = findIndexInput(input);
    const id = getStudentElId(student);
    const studentEl = findStudentById(id);
    studentEl.marks[markIndex] = Number(input.value);
    updateStudent(studentEl);
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  const student = getStudent();
  createStudent(student);

  clearForm();
}

function onStudentContainerClick(e) {
  const target = e.target;
  const studentEl = findStudentEl(target);

  if (isDeleteBtn(target)) {
    deleteStudentEl(studentEl);
  }
}

function init() {
  StudentApi.getList()
    .then((list) => {
      generateStudentList(list);
      studentList = list;
    })
    .catch((e) => showError(e));
}

function updateStudent(student) {
  StudentApi.update(student.id, student)
    .then((newStudent) => {
      replaceStudent(student.id, newStudent);
      studentList = studentList.map((studentItem) =>
        studentItem.id === student.id ? newStudent : studentItem
      );
    })
    .catch((e) => showError(e));
}

function createStudent(student) {
  StudentApi.create(student)
    .then((newStudent) => {
      renderStudent(newStudent);
      studentList.push(newStudent);
    })
    .catch((e) => showError(e));
}

function findStudentEl(el) {
  return el.closest(".studentItem");
}

function getStudent() {
  return { name: input.value };
}

function replaceStudent(id, student) {
  const oldStudentEl = document.querySelector(`[data-id='${id}']`);
  const newStudentEl = generateStudentHtml(student);

  oldStudentEl.outerHTML = newStudentEl;
}

function deleteStudentEl(el) {
  const id = getStudentElId(el);
  StudentApi.delete(id).catch((e) => showError(e));
  el.remove();
  studentList = studentList.filter((studentItem) => studentItem.id !== id);
}

function generateStudentList(list) {
  return list.map(renderStudent).join("");
}

function renderStudent(student) {
  const html = generateStudentHtml(student);

  studentContainer.insertAdjacentHTML("beforeend", html);
}

// работает неправильно
function generateStudentHtml(student) {
  const { id, name, marks } = student;
  let input = ``;
  for (let i = 0; i < 10; i++) {
    input += `<input type="text"  class="markInput" id="${i}" value="${marks[i]}" style='width: 20px />`;
  }
  return `
<tr class="studentItem" data-id="${id}">
<td>${name}</td>
<td>
  <form class="marks">
${input}
 </form>
</td>
<td><span><button type="button" class="deleteBtn">Delete</button></span></td>
</tr>
  `;
}

// function generateStudentHtml(student) {
//   const { id, name, marks } = student;
//   return `
//   <tr class="studentItem" data-id="${id}">
//   <td>${name}</td>
//   <td>
//     <form>
//     <input type="text" id="0" class="markInput" data-id="0" value='${marks[0]}'/>
//     <input type="text" id="1" class="markInput" data-id="1" value='${marks[1]}'/>
//     <input type="text" id="2" class="markInput" data-id="2" value='${marks[2]}'/>
//     <input type="text"  id="3"class="markInput" data-id="3" value='${marks[3]}'/>
//     <input type="text"  id="4" class="markInput" data-id="4" value='${marks[4]}'/>
//     <input type="text"  id="5" class="markInput" data-id="5" value='${marks[5]}'/>
//     <input type="text"  id="6" class="markInput" data-id="6" value='${marks[6]}'/>
//     <input type="text"  id="7" class="markInput" data-id="7" value='${marks[7]}'/>
//     <input type="text"  id="8" class="markInput" data-id="8" value='${marks[8]}'/>
//     <input type="text"  id="9" class="markInput" data-id="9" value='${marks[9]}'/>
//     </form>
//   </td>
//   <td><span><button type="button" class="deleteBtn">Delete</button></span></td>
//   </tr>
//     `;
// }

function getStudentElId(el) {
  return el.dataset.id;
}

function findStudentById(id) {
  return studentList.find((student) => student.id === id);
}

function clearForm() {
  form.reset();
}

function showError(error) {
  alert(error.message);
}

function isFosucOut(el) {
  return el.classList.contains(CLASS_STUDENT_MARK);
}

function isDeleteBtn(el) {
  return el.classList.contains(CLASS_DELETE_BTN);
}

function findIndexInput(el) {
  return el.dataset.id;
}

function findInput(el) {
  return el.closest("." + CLASS_STUDENT_MARK);
}
