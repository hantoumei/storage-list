import * as components from './components.js';
import { navigate } from './index.js';
import { getList, searchInLocalStorage } from './local-storage.js';
import { renderTable } from './listPage.js';

export let itemToSearch = null;

// Отрисовка страницы добавления
export default async function renderSearchPage(parent) {
  const gridWrapper = components.getDivGrid();
  const wrapper = components.getDivCenterSticky();
  const title = components.getH1Search('Поиск');
  const form = components.getForm('#', 'GET');

  const inputName = components.getInput('name', 'text', 'name', 'Название');
  const inputShelf = components.getInput('shelf', 'text', 'shelf', 'Полка');
  const inputWeight = components.getInputNumber('weight', 'weight', '0.01', '0.01', 'Вес');
  const inputDate = components.getInput('date', 'date', 'date', 'Время хранения');
  const btnWrapper = components.getDivFlex();
  const submitBtn = components.getButton('Найти', 'submit', 'button--green');
  const backBtn = components.getButton('Назад', 'button', 'button--grey');

  const table = components.getListTable();
  
  btnWrapper.append(submitBtn, backBtn);
  form.append(inputName, inputShelf, inputWeight, inputDate, btnWrapper);
  wrapper.append(form);
  gridWrapper.append(wrapper, table);
  parent.append(title, gridWrapper);
  
  backBtn.addEventListener('click', function () {
    itemToSearch = null;
    navigate('list');
  });

  renderTable(getList());

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    itemToSearch = Object.fromEntries(new FormData(form));
    renderTable(searchInLocalStorage(itemToSearch), true);
  })
}