const profileImage = document.getElementById('profileImage');
const viewProfileBtn = document.getElementById('viewProfileBtn');

const publicReposBtn = document.getElementById('publicReposBtn');
const publicGistsBtn = document.getElementById('publicGistsBtn');
const followersBtn = document.getElementById('followersBtn');
const followingBtn = document.getElementById('followingBtn');

const company = document.getElementById('company');
const blog = document.getElementById('blog');
const location = document.getElementById('location');
const createdAt = document.getElementById('createdAt');

export default class ProfileView {

    constructor () {
    }

    setAttribute(user) {
        profileImage.setAttribute("src", user.avatar_url); 
        viewProfileBtn.setAttribute("onclick", `location.href='${user.profile_url}'`);
        
        publicReposBtn.textContent = `Public Repos: ${user.public_repos}`;
        publicReposBtn.setAttribute("onclick", `location.href='${user.profile_url}?tab=repositories'`);
        publicGistsBtn.textContent = `Public Gists: ${user.public_gists}`;
        publicGistsBtn.setAttribute("onclick", `location.href='https://gist.github.com/${user.name}'`);
        followersBtn.textContent = `Followers: ${user.followers}`;
        followersBtn.setAttribute("onclick", `location.href='${user.profile_url}?tab=followers'`);
        followingBtn.textContent = `Following: ${user.following}`;
        followingBtn.setAttribute("onclick", `location.href='${user.profile_url}?tab=following'`);

        company.textContent = `Company: ${user.company}`;
        blog.textContent = `Blog: ${user.blog}`;
        location.textContent = `Location: ${user.location}`;
        createdAt.textContent = `Member Since: ${user.created_at}`;
    }

}