let current_pet_info = null

const bars = [
    "Saturation",
    "Hydration",
    "Mental_Health",
    "Happiness",
    "Health"

]

const shop = [
    {
        Name: "Header", 
        image: "src/Assets/duck.jpg", 
        description: "Description"
    },    
    {
        Name: "Header", 
        image: "src/Assets/duck.jpg", 
        description: "Description"
    },    
    {
        Name: "Header", 
        image: "src/Assets/duck.jpg", 
        description: "Description"
    },


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
    Real_body.insertAdjacentHTML("afterend", 
        `
            <div class = "infoBars">
                <div class = "bar" id = "Health"><p>Health: 100%</p></div>
                <div class = "bar" id = "Saturation"><p>Saturation: 100%</p></div>
                <div class = "bar" id = "Hydration"><p>Hydration: 100%</p></div>
                <div class = "bar" id = "Mental_Health"><p>Mental_Health: 100%</p></div>
                <div class = "bar" id = "Happiness"><p>Happiness: 100%</p></div>
            </div> 
        
        `
    )
    const infoBars = document.querySelector(".infoBars")

    infoBars.insertAdjacentHTML("afterend", 
        `
            <div class = "filter_buttons">
                <button class = "filter">Shop</button>
                <button class = "filter">Inventory</button>
                <button class = "filter">Money</button>
            </div>  
        `
    )
    
    
    shop.forEach((item) => {
        document.querySelector(".items").insertAdjacentHTML("beforeend", 
            `
            <div class = "item_card">
                <h2>${item.Name}</h2>
                <img src = "${item.image}">
                <p>${item.description}</p>
                <button>Could be a button</button>
            </div> 
            
            
            `)
    })




    setInterval(mainGameLoop, TICK_RATE)
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
    let fail = 0
    
    bars.forEach((bar) => {
        selected_bar = document.querySelector(`#${bar}`)
        
        if(bar === "Saturation"){
            if (parseInt(selected_bar.textContent.split(" ")[1]) === 0){
                fail += 1
            } 
            else if (time%2 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}%</p>`
            }
        }
        else if (bar === "Hydration"){
            if (parseInt(selected_bar.textContent.split(" ")[1]) === 0){
                fail += 1
            } 
            else if (time%1 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}%</p>`
            }
        }
        else if (bar === "Mental_Health"){
            if (parseInt(selected_bar.textContent.split(" ")[1]) === 0){
                fail += 1
            } 
            else if (time%3 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}%</p>`
            }
        }
        else if (bar === "Happiness"){
            if (parseInt(selected_bar.textContent.split(" ")[1]) === 0){
                fail += 1
            } 
            else if (time%4 === 0){
                selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1}%</p>`
            }
        }
        else if (bar === "Health"){    
            console.log(`Fail value: ${fail}`)
            selected_bar.innerHTML = `<p>${bar}: ${parseInt(selected_bar.textContent.split(" ")[1]) - 1*fail}%</p>`
        }
    })
}



light_and_dark()
adopt()

