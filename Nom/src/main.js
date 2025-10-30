function light_and_dark(){
    modeBTN = document.querySelector(".mode")
    modeBTN.addEventListener("click", function (){
    console.log("test")
        if (document.body.classList.contains("dark")){
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        } else{
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }
    })
}

let current_pet_info = null

function enter_game(){
    Real_body = document.querySelector(".Real_Body")
    document.querySelector(".toolBar").children[0].textContent = `This is your pet: ${current_pet_info.children[0].textContent}`
    Real_body.innerHTML = ""
}

function adopt(){
    buttons = document.querySelectorAll(".Adopt")
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(event){
            current_pet_info = event.target.closest(".card")
            console.log(current_pet_info)
            enter_game(current_pet_info)
            
        })
    })
}



light_and_dark()
adopt()