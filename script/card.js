const url = "https://api.github.com/users/";
let gitcard = document.getElementById("gitcard");
let gitform = document.getElementById("gitform");
let gitinput = document.getElementById("gitinput");
let user;

gitform.addEventListener('submit', newCard);

function getUser(gitUrl) {
    fetch(gitUrl)
        .then(async (response) => await response.json())
        .then((data) => {
            if(data.message === 'Not Found'){return}
            else{
                let output = `
                <a href="${data.html_url}" target="_blank">
                    <img class="img-fluid rounded-circle mt-5 mb-3" src="${data.avatar_url}" alt="${data.name}">
                </a>
                <div class="p-3 text-center">
                    <h2>${data.name}</h2>
                    <p>@${data.login}</p>
                </div>
                <ul class="row m-0 p-0 pt-3 gitstat">
                    <li class="col-4 text-center align-items-center">
                        <p class="gitnum">${data.public_repos}</p>
                        <p>Repos</p>
                    </li>
                    <li class="col-4 text-center align-items-center">
                        <p class="gitnum">${data.public_gists}</p>
                        <p>Gists</p>
                    </li>
                    <li class="col-4 text-center align-items-center">
                        <p class="gitnum">${data.followers}</p>
                        <p>Followers</p>
                    </li>
                </ul>
                `;
                gitcard.innerHTML = output;
            }
        })
}

function newCard(e){
    e.preventDefault(); //Impede reload da página
    user = gitinput.value;
    if(user != ''){
        getUser(url + user);
    }
    gitform.reset()
}

getUser(url + "Ander-Tk");
