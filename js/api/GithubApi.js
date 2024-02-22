import User from '../class/User.js';
import Repository from '../class/Repository.js';
import UserSearchResult from '../class/UserSearchResult.js';

const BASE_URL = 'https://api.github.com';

async function searchUsersByUserName(userName) {
    try {
        const response = await fetch(`${BASE_URL}/search/users?q=${userName}`);
        console.log(response);
        const data = await response.json();
        return await data.items.map(e => new UserSearchResult(e));
    }
    catch (e) {
        window.alert('잠시 후에 시도해주세요.');
        console.error(e);
        return [];
    }
}

async function getUserByUserName(userName) {
    try {
        const response = await fetch(`${BASE_URL}/users/${userName}`);
        const data = await response.json();
        return await new User(data);
    }
    catch (e) {
        console.error(e);
    }
}

async function getRecentReposByUser(user, count) {
    try {
        const response = await fetch(`${BASE_URL}/users/${user.name}/repos?per_page=${count}&sort=created`);
        const data = await response.json();
        return await data.map(e => new Repository(e));
    }
    catch (e) {
        console.error(e);
    }
}

export {searchUsersByUserName, getUserByUserName, getRecentReposByUser};