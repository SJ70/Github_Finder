export default function getRepoEl (repo) {
    const repoBox = document.createElement("li");
    repoBox.classList.add("repo"); 
    repoBox.classList.add("box");
    
    const repoTitle = document.createElement("p");
    repoTitle.classList = "repo-title";
    repoTitle.innerText = repo.name;
    repoBox.appendChild(repoTitle);

    const tags = document.createElement("ul");
    tags.classList = "tags";
    tags.appendChild(getStarsTagEl(repo));
    tags.appendChild(getWatchersTagEl(repo));
    tags.appendChild(getForksTagEl(repo));
    repoBox.appendChild(tags);

    return repoBox;
}

function getStarsTagEl (repo) {
    const liEl = document.createElement("li");

    const btnEl = document.createElement("button");
    btnEl.classList = "tag";
    btnEl.innerText = `Stars: ${repo.stars}`;
    btnEl.setAttribute("onclick", `location.href='${repo.html_url}/stargazers'`);
    liEl.appendChild(btnEl);

    return liEl;
}

function getWatchersTagEl (repo) {
    const liEl = document.createElement("li");

    const btnEl = document.createElement("button");
    btnEl.classList = "tag";
    btnEl.innerText = `Watchers: ${repo.watchers}`;
    btnEl.setAttribute("onclick", `location.href='${repo.html_url}/watchers'`);
    liEl.appendChild(btnEl);

    return liEl;
}

function getForksTagEl (repo) {
    const liEl = document.createElement("li");

    const btnEl = document.createElement("button");
    btnEl.classList = "tag";
    btnEl.innerText = `Forks: ${repo.forks}`;
    btnEl.setAttribute("onclick", `location.href='${repo.html_url}/forks'`);
    liEl.appendChild(btnEl);

    return liEl;
}