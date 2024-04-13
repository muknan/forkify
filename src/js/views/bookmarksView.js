import View from './View';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `You have no bookmarks! Add one to the list to get started.`;
  _message = '';

  _generateMarkup() {
    return this._data.map(res => previewView.render(res, false)).join('');
  }
}

export default new BookmarksView();
