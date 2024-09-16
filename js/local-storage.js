// Получение списка из хранилища
export function getList() {
  return JSON.parse(localStorage.getItem('storage')) || [];
}

// Добавление элемента в хранилище
export function addToLocalStorage(item) {
  const list = getList();
  list.push(item);
  localStorage.setItem('storage', JSON.stringify(list));
}

// Удаление элемента по индексу из хранилища
export function deleteFromLocalStorage(index) {
  const list = getList();
  list.splice(index, 1);
  localStorage.setItem('storage', JSON.stringify(list));
}

// Поиск в хранилище
export function searchInLocalStorage(item) {
  const list = getList();
  return list.filter(el => 
    el.name.toLowerCase().includes(item.name.toLowerCase())
    && el.shelf.toLowerCase().includes(item.shelf.toLowerCase())
    && el.weight.startsWith(item.weight)
    && el.date.includes(item.date)
  )
}