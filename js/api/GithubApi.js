import User from '../class/User.js';
import Repository from '../class/Repository.js';

const BASE_URL = 'https://api.github.com';

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

export {getUserByUserName, getRecentReposByUser};