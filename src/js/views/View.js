import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._addMarkup(markup);
  }

  renderUpdate(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed text
      // nodeValue returns the text content of the element
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed attributes
      // Array.from to convert Node into an Array
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _addMarkup(markup) {
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `;
    this._clear();
    this._addMarkup(markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
  `;
    this._clear();
    this._addMarkup(markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
  `;
    this._clear();
    this._addMarkup(markup);
  }
<<<<<<< HEAD

  resetModal() {
    const markup = `
    <form class="upload">
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input value="TEST1234" required name="title" type="text" />
      <label>URL</label>
      <input value="TEST1234" required name="sourceUrl" type="text" />
      <label>Image URL</label>
      <input value="TEST1234" required name="image" type="text" />
      <label>Publisher</label>
      <input value="TEST1234" required name="publisher" type="text" />
      <label>Prep time</label>
      <input value="23" required name="cookingTime" type="number" />
      <label>Servings</label>
      <input value="23" required name="servings" type="number" />
    </div>

    <div class="upload__column">
      <h3 class="upload__heading">Ingredients</h3>
      <label>Ingredient 1</label>
      <input
        value="0.5,kg,Rice"
        type="text"
        required
        name="ingredient-1"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 2</label>
      <input
        value="1,,Avocado"
        type="text"
        name="ingredient-2"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 3</label>
      <input
        value=",,salt"
        type="text"
        name="ingredient-3"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 4</label>
      <input
        type="text"
        name="ingredient-4"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 5</label>
      <input
        type="text"
        name="ingredient-5"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
      <label>Ingredient 6</label>
      <input
        type="text"
        name="ingredient-6"
        placeholder="Format: 'Quantity,Unit,Description'"
      />
    </div>

    <button class="btn upload__btn">
      <svg>
        <use href="src/img/icons.svg#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
  </form>
  `;
    this._clear();
    this._addMarkup(markup);
  }
=======
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
}
