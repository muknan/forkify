<<<<<<< HEAD
import { API_URL, RES_PER_PAGE, KEY } from './config';
// import { getJSON, sendJSON } from './helper';
import { AJAX } from './helper';
=======
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helper';
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

<<<<<<< HEAD
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
=======
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
    // Moving the commented code to helper.js
    // const res = await fetch(`${api}/${id}`);
    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // const data = await res.json();
    const { recipe } = data.data;
<<<<<<< HEAD
    state.recipe = createRecipeObject(data);
=======
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    // Temporary error handling
    console.error(`${err} 🐼💩`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
<<<<<<< HEAD
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
=======
    const data = await getJSON(`${API_URL}?search=${query}`);
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
<<<<<<< HEAD
        ...(rec.key && { key: rec.key }),
=======
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 🐼💩`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; // 9;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as a bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const removeBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Unselect current recipe from bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (!storage) return;
  state.bookmarks = JSON.parse(storage);
};

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();
<<<<<<< HEAD

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3) throw new Error('Wrong ingredient format');
        const [quantity, unit, description] = ing[1]
          .replaceAll(' ', '')
          .split(',');
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
=======
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
