import { searchUsersByUserName, getUserByUserName, getRecentReposByUser } from './js/api/GithubApi.js';
import displayReposEl from './js/element/displayReposEl.js';
import { clearResults, displaySearchResultsEl } from './js/element/displaySearchResultsEl.js';
import ProfileView from './js/element/ProfileView.js';
import User from './js/class/User.js';

const searchUserInputEl = document.getElementById('searchUserInput');

searchUserInputEl.addEventListener('input', async (event) => {
  const inputValue = event.target.value;
  if (inputValue == "") {
    clearResults();
    return;
  }

  const searchUserResult = await searchUsersByUserName(inputValue);
  displaySearchResultsEl(searchUserResult);
});