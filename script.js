import { searchUsersByUserName, getUserByUserName, getRecentReposByUser } from './js/api/GithubApi.js';
import displayReposEl from './js/element/displayReposEl.js';
import { clearResults, displaySearchResultsEl } from './js/element/displaySearchResultsEl.js';
import ProfileView from './js/element/ProfileView.js';
import User from './js/class/User.js';

const searchUserInputEl = document.getElementById('searchUserInput');

const profileView = new ProfileView();

searchUserInputEl.addEventListener('input', async (event) => {
  const inputValue = event.target.value;
  if (inputValue == "") {
    clearResults();
    return;
  }

  const searchUserResult = await searchUsersByUserName(inputValue);
  console.log(searchUserResult);
  displaySearchResultsEl(searchUserResult);

  // user = getUserByUserName(event.target.value);
  // const userInfo = JSON.parse(static_data);
  // const user = new User(userInfo);
  // profileView.setAttribute(user);
  
  // const reposInfo = await getRecentReposByUser(user, 5);
  // await displayReposEl(reposInfo);
});

// 요청 횟수 제한을 위한 정적 데이터
const static_data = `{
  "login": "SJ70",
  "id": 50670730,
  "node_id": "MDQ6VXNlcjUwNjcwNzMw",
  "avatar_url": "https://avatars.githubusercontent.com/u/50670730?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/SJ70",
  "html_url": "https://github.com/SJ70",
  "followers_url": "https://api.github.com/users/SJ70/followers",
  "following_url": "https://api.github.com/users/SJ70/following{/other_user}",
  "gists_url": "https://api.github.com/users/SJ70/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/SJ70/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/SJ70/subscriptions",
  "organizations_url": "https://api.github.com/users/SJ70/orgs",
  "repos_url": "https://api.github.com/users/SJ70/repos",
  "events_url": "https://api.github.com/users/SJ70/events{/privacy}",
  "received_events_url": "https://api.github.com/users/SJ70/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "https://velog.io/@sj70/posts",
  "location": "Korea",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2019-05-15T15:13:57Z",
  "updated_at": "2024-01-06T10:31:08Z"
}`;