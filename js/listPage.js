import * as components from './components.js';
import { navigate } from './index.js';
import { getList } from './local-storage.js';
import { deleteFromLocalStorage, searchInLocalStorage } from './local-storage.js';
import { itemToSearch } from './searchPage.js';

// Сортировка таблицы
export function sortTable(arr, sortValue) {

  switch (sortValue) {
    case 'weight':
      return arr.sort((a, b) => a[sortValue] - b[sortValue]);
    default:
      return arr.sort((a, b) => a[sortValue].toLocaleLowerCase().localeCompare(b[sortValue].toLocaleLowerCase()));
  }
}

// Получение индекса удаляемого элемента
function getItemIndex(button) {
  const itemRow = Array.from(button.parentElement.parentElement.parentElement.children)
  const itemName = itemRow[0].textContent;
  const itemShelf = itemRow[1].textContent;
  const itemWeight = itemRow[2].textContent;
  const itemDate = itemRow[3].textContent;

  const list = getList();

  return list.findIndex(el =>
    el.name === itemName &&
    el.shelf === itemShelf &&
    el.weight === itemWeight &&
    el.date === itemDate);
}

export let itemToEdit = null;
export let itemToEditIndex = null;

// Отрисовка таблицы
export function renderTable(arr, search) {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';

  if (search) {
    if (arr.length == 0) {
      const notice = components.getParagraph('По заданному запросу записей не найдено');
      tableBody.append(notice);
    }
  } else {
    if (arr.length == 0) {
      const notice = components.getParagraph('Список пуст. Добавьте первую запись');
      tableBody.append(notice);
    }
  }

  arr.forEach(element => {
    const newRow = components.getRow();

    Object.values(element).forEach(el => {
      const newData = components.getTableData(el);
      newRow.append(newData);
    })

    const deleteBtn = components.getEditButtons();
    newRow.append(deleteBtn);
    tableBody.append(newRow);
  });

  document.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', function () {
      renderTable(sortTable(arr, th.className));
    });
  })

  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      itemToEditIndex = getItemIndex(btn)
      itemToEdit = getList()[itemToEditIndex]
      navigate('edit')
    })
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      deleteFromLocalStorage(getItemIndex(btn));
      if (search) {
        renderTable(searchInLocalStorage(itemToSearch), true);
      } else {
        navigate('list');
      }
    })
  });
}

// Отрисовка страницы списка
export default function renderListPage(parent) {
  const topWrapper = components.getDivSpaceBetween();
  const title = components.getH1('Склад');
  const btnWrapper = components.getDivFlex();
  const addBtn = components.getButton('Добавить запись', 'button', 'button--green');
  const searchBtn = components.getButton('Поиск', 'button', 'button--grey');
  const table = components.getListTable();

  btnWrapper.append(searchBtn, addBtn)
  topWrapper.append(title, btnWrapper);
  parent.append(topWrapper, table);

  const list = getList();

  renderTable(sortTable(list, 'name'));

  searchBtn.addEventListener('click', function() {
    navigate('search');
  })

  addBtn.addEventListener('click', function () {
    navigate('add');
  })
}



