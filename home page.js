//Right nav bar
let body = document.body;

followButton.forEach(btn => { btn.addEveentListener('click', e => followeunfollow(e.target))})

function followUnFollow (button){
    button.classList.toggle("followed");
    if(button.innerText == "Follow" ) button.innerText = "Unfollow";
    else button.innerText = "Follow";
}
//End of right nav bar 

