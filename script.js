import { searchUsersByUserName } from './js/api/GithubApi.js';
import { clearResults, displaySearchResultsEl } from './js/element/displaySearchResultsEl.js';

const searchUserInputEl = document.getElementById('searchUserInput');

let searchTimeOut = null;

searchUserInputEl.addEventListener('input', async (event) => {

  // 입력 후 0.5초가 지난 후에 검색 요청을 보냄
  clearTimeout(searchTimeOut);
  searchTimeOut = setTimeout(async () => {

    const inputValue = event.target.value;
    if (inputValue == "") {
      clearResults();
      return;
    }
  
    const searchUserResult = await searchUsersByUserName(inputValue);
    displaySearchResultsEl(searchUserResult);

  }, 500);

});