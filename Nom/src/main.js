let current_pet_info = null

bars = [
    "Health",
    "Saturation",
    "Hydration",
    "Mental_Health",
    "Happiness"

]


const TICK_RATE = 1000
let time = 0

//0: Health, 1: Saturation, 2: Hydration, 3: Mental Health, 4: Happiness



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



function enter_game(pet_info){
    const Real_body = document.querySelector(".Real_Body")
    document.querySelector(".toolBar").children[0].textContent = `This is your pet: ${current_pet_info.children[0].textContent}`
    Real_body.innerHTML = ""
    console.log(pet_info)
    Real_body.insertAdjacentHTML("afterbegin", ` 
      <div class = "card">
        <h1>${pet_info.children[0].textContent}</h1>
        <img src = "src/Assets/duck.jpg"/>
        <p>Standard pet.</p>
      </div>   
    `)
    mainGameLoop()
}

function adopt(){
    buttons = document.querySelectorAll(".Adopt")
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(event){
            current_pet_info = event.target.closest(".card")
            enter_game(current_pet_info)
            
        })
    })
}

function mainGameLoop(){
    console.log("Ahh")
    time += 1
    updateStatPercentage(time)
    
}



function updateStatPercentage(time){
    let selected_bar = null
    
    bars.forEach((bar) => {
        selected_bar = document.querySelector(`#${bar}`)
        
        if (bar === "Health"){    
            if (time%2 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}</p>`
            }
        }
        else if(bar === "Saturation"){
            if (time%3 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}</p>`               
            }
        }
        else if (bar === "Hydration"){
            if (time%4 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}</p>`  
            }
        }
        else if (bar === "Mental_Health"){
            if (time%5 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}</p>`
            }
        }
        else if (bar === "Happiness"){
            if (time%6 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}</p>` 
            }
        }



    


        


    })
}



light_and_dark()
adopt()

//setInterval(mainGameLoop, TICK_RATE)
