// Получение оберток
function getDivSpaceBetween() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-space-between');
  return wrapper;
}

function getDivFlex() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper')
  return wrapper;
}

function getDivGrid() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-grid');
  return wrapper;
}

function getDivCenter() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-center');
  return wrapper;
}

function getDivCenterSticky() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-center-sticky');
  return wrapper;
}

// Получение заголовка
function getH1(text) {
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = text;
  return title;
}

function getH1Search(text) {
  const title = document.createElement('h1');
  title.classList.add('title', 'title--search');
  title.textContent = text;
  return title;
}

// Получение таблицы списка
function getListTable(){
  const table = document.createElement('table');
  table.innerHTML = `
      <thead>
        <tr>
          <th class="name">Название</th>
          <th class="shelf">Полка</th>
          <th class="weight">Вес</th>
          <th class="date">Время хранения</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
  `;
  return table;
}

// Получение параграфа
function getParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('notice');
  paragraph.textContent = text;
  return paragraph;
}

// Получение кнопки
function getButton(text, type, mod) {
  const button = document.createElement('button');
  button.classList.add('button');
  if (mod) {
    button.classList.add(`${mod}`);
  }
  button.type = type;
  button.textContent = text;
  return button;
}

// Получение кнопки удаления
function getEditButtons() {
  const editBtn = getButton('Изменить', 'button', 'button--green')
  const deleteBtn = getButton('Удалить', 'button', 'button--red');
  const tableData = document.createElement('td');
  const btnWrapper = getDivFlex();
  editBtn.classList.add('edit-btn');
  deleteBtn.classList.add('delete-btn');
  btnWrapper.append(editBtn, deleteBtn)
  tableData.append(btnWrapper);
  return tableData;
}

// Получение формы
function getForm(action, method) {
  const form = document.createElement('form');
  form.action = action;
  form.method = method;
  form.classList.add('form');
  return form;
}

// Получение поля ввода
function getInput(name, type, id, placeholder) {
  const input = document.createElement('input');
  input.name = name;
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.classList.add('input');
  return input;
}

function getInputNumber(name, id, step, min, placeholder) {
  const input = document.createElement('input');
  input.name = name;
  input.type = 'number';
  input.step = step;
  input.min = min;
  input.id = id;
  input.placeholder = placeholder;
  input.classList.add('input');
  return input;
}

// Получение обертки поля ввода
function getInputDiv() {
  const div = document.createElement('div');
  div.classList.add('input-wrapper');
  return div;
}

// Получение лоадера
function getLoader() {
  const div = document.createElement('div');
  div.classList.add('loader');
  return div;
}

// Получение строки таблицы
function getRow() {
  const row = document.createElement('tr');
  return row;
}

// Получение ячейки таблицы
function getTableData(text) {
  const tableData = document.createElement('td');
  tableData.textContent = text;
  return tableData;
}

export {
  getDivSpaceBetween,
  getDivCenter,
  getH1,
  getH1Search,
  getButton,
  getEditButtons,
  getForm,
  getInput,
  getInputDiv,
  getLoader,
  getRow,
  getTableData,
  getDivFlex,
  getParagraph,
  getDivGrid,
  getListTable,
  getDivCenterSticky,
  getInputNumber,
}