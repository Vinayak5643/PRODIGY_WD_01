let elements2 = document.querySelector('.elements');
let icon = document.querySelector(".burger");
let lists = document.querySelectorAll('.list');

function hamburger(){
    

    if (elements2.style.display == "block"){
        icon.classList.remove("fi-sr-cross");
        icon.classList.add("fi-sr-apps");
        elements2.style.display = "none";
    }

    else{
        icon.classList.remove("fi-sr-apps");
        icon.classList.add("fi-sr-cross");
        elements2.style.display = "block";
        elements2.style.textAlign = "center";
        elements2.style.backgroundColor = "black";
        elements2.style.color = "white";
        elements2.style.marginBottom = "20px";
        elements2.style.position = "sticky";
        elements2.style.top = "0";
    }
}