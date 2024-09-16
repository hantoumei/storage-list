import { getLoader } from './components.js';

// Навигации по страницам
export async function navigate(page) {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const loader = getLoader();
  app.append(loader);

  if (page == 'list') {
    const listPage = await import('./listPage.js');
    listPage.default(app);
    app.classList.remove('app--search');
    loader.remove();
  }
  if (page == 'add') {
    const addPage = await import('./addPage.js')
    addPage.default(app);
    app.classList.remove('app--search');
    loader.remove();
  }
  if (page == 'edit') {
    const editPage = await import('./editPage.js')
    editPage.default(app);
    app.classList.remove('app--search');
    loader.remove();
  }
  if (page == 'search') {
    const searchPage = await import('./searchPage.js');
    searchPage.default(app);
    app.classList.add('app--search');
    loader.remove();
  }
}

// Домашняя страница
document.addEventListener('DOMContentLoaded', function () {
  // if (itemToSearch) {
  //   itemToSearch = null;
  // }
  navigate('list');
});