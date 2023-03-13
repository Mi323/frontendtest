function fav(){
    alert('お気に入りに追加されました');
}

let pinlmg = document.getElementById("pin");

function changelmg(){
    pinlmg.classList.toggle("on_pin");
}

pinlmg.addEventListener("click", changelmg);