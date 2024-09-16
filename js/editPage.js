import * as components from './components.js';
import { navigate } from './index.js';
import { addToLocalStorage, deleteFromLocalStorage } from './local-storage.js';
import { newValidation } from './just-validate.js';
import { itemToEdit, itemToEditIndex } from './listPage.js';
import { itemToSearch } from './searchPage.js';

// Функция сабмита
export function onEdit(e) {
  e.preventDefault();
  addToLocalStorage(Object.fromEntries(new FormData(document.querySelector('.form'))));
  deleteFromLocalStorage(itemToEditIndex);
  if (itemToSearch) {
    navigate('search');
  } else {
    navigate('list');
  }
}

// Отрисовка страницы редактирования
export default async function renderEditPage(parent) {
  const wrapper = components.getDivCenter();
  const title = components.getH1('Изменить запись');
  const form = components.getForm('#', 'GET');

  const inputName = components.getInput('name', 'text', 'name', 'Название');
  const inputShelf = components.getInput('shelf', 'text', 'shelf', 'Полка');
  const inputWeight = components.getInput('weight', 'number', 'weight', 'Вес');
  const inputDate = components.getInput('date', 'date', 'date', 'Время хранения');
  const submitBtn = components.getButton('Изменить запись', 'submit', 'button--green');
  const backBtn = components.getButton('Назад', 'button', 'button--grey');

  inputName.value = itemToEdit.name;
  inputShelf.value = itemToEdit.shelf;
  inputWeight.value = itemToEdit.weight;
  inputDate.value = itemToEdit.date;

  const divName = components.getInputDiv();
  const divShelf = components.getInputDiv();
  const divWeight = components.getInputDiv();
  const divDate = components.getInputDiv();
  const divButtons = components.getDivFlex();

  divName.append(inputName);
  divShelf.append(inputShelf);
  divWeight.append(inputWeight);
  divDate.append(inputDate);
  divButtons.append(submitBtn, backBtn);

  form.append(divName, divShelf, divWeight, divDate, divButtons);
  wrapper.append(title, form);
  parent.append(wrapper);
  await import('https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js');
  newValidation(onEdit);

  backBtn.addEventListener('click', function () {
    navigate('list');
  });
}