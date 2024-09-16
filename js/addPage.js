import * as components from './components.js';
import { navigate } from './index.js';
import { addToLocalStorage } from './local-storage.js';
import { newValidation } from './just-validate.js';

// Функция сабмита
export function onSubmit(e) {
  e.preventDefault();
  addToLocalStorage(Object.fromEntries(new FormData(document.querySelector('.form'))));
  navigate('list');
}

// Отрисовка страницы добавления
export default async function renderAddPage(parent) {
  const wrapper = components.getDivCenter();
  const title = components.getH1('Добавить запись');
  const form = components.getForm('#', 'GET');

  const inputName = components.getInput('name', 'text', 'name', 'Название');
  const inputShelf = components.getInput('shelf', 'text', 'shelf', 'Полка');
  const inputWeight = components.getInputNumber('weight', 'weight', '0.01', '0.01', 'Вес');
  const inputDate = components.getInput('date', 'date', 'date', 'Время хранения');
  const submitBtn = components.getButton('Добавить запись', 'submit', 'button--green');
  const backBtn = components.getButton('Назад', 'button', 'button--grey');

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
  newValidation(onSubmit);
  
  backBtn.addEventListener('click', function () {
    navigate('list');
  });
}