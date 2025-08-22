let user = document.getElementById("uses");

async function fetchUser(username){
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();
    displayUser(result);
}

document.getElementById("bttn").addEventListener("click", () =>{
    let userID = user.value;
    fetchUser(userID);
});

function displayUser(result){
    if(!result.html_url){
        document.getElementById('two').innerHTML = `<h1>User Not Found</h1>`
        return         
    }
    if(!result.bio){
        result.bio = ""
    }
    document.getElementById('two').innerHTML = `            
    <div class="userInfo">
                <img class="img" src=${result.avatar_url} alt="">
                <div class="userDetail">
                <p class="userName">${result.name}</p>
                <p class="userbio">${result.bio}</p>
                </div>
            </div>

            <div class="stats-container">
                <div class="stats">
                    <p>Followers<br>${result.followers}</p>
                    <p>Following<br>${result.following}</p>
                    <p>Repository<br>${result.public_repos}</p>
                </div>
                <a href="${result.html_url}" target="_blank" class="viewProfile">View Profile</a>
                </div>
            </div>`;

}