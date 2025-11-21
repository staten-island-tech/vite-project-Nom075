const bars = [
    "Saturation",
    "Hydration",
    "Mental_Health",
    "Happiness",
    "Health"

]

const Shop = [
    {
        Name: "Vial of Burger", 
        image: "src/Assets/duck.jpg", 
        description: "Burger, 10",
        price: 10,
        use: {target: "Saturation", effect: 10}
    },    
    {
        Name: "Vial of Juice", 
        image: "src/Assets/duck.jpg", 
        description: "Juice, 10",
        price: 10,
        use: {target: "Hydration", effect: 10}
    },    
    {
        Name: "Toy", 
        image: "src/Assets/duck.jpg", 
        description: "Toy, 10",
        price: 10,
        use: {target: "Mental_Health", effect: 10}
    },
    {
        Name: "Chao Jie", 
        image: "src/Assets/duck.jpg", 
        description: "Chaojie, 10",
        price: 10,
        use: {target: "Happiness", effect: 10}
    },
    {
        Name: "Vial of Health", 
        image: "src/Assets/duck.jpg", 
        description: "Vial of Health, 10",
        price: 10,
        use: {target: "Health", effect: 10}
    },
]

let Health = 100
let Saturation = 100
let Hydration = 100
let Mental_Health = 100
let Happiness = 100
let passive_income = 1




const inventory = [
  
]


let current_pet_info = null
let Money = 6777
const TICK_RATE = 100
let time = 0

//0: Health, 1: Saturation, 2: Hydration, 3: Mental Health, 4: Happiness


//light and dark
function light_and_dark(){
    modeBTN = document.querySelector(".mode")
    modeBTN.addEventListener("click", function (){
        if (document.body.classList.contains("dark")){
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        } else{
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        }
    })
}


//initial game start page and UI
function enter_game(pet_info){
    const Real_body = document.querySelector(".Real_Body")
    document.querySelector(".toolBar").children[0].textContent = `This is your pet: ${current_pet_info.children[0].textContent}`
    Real_body.innerHTML = ""
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
                <div class = "bar" id = "Money"><p>Money: $${Money}</p></div>
            </div> 
        
        `
    )
    const infoBars = document.querySelector(".infoBars")

    infoBars.insertAdjacentHTML("afterend", 
        `
            <div class = "filter_buttons">
                <button class = "filter">Shop</button>
                <button class = "filter">Inventory</button>
                <button class = "filter_butMoney">Money</button>
            </div>  
        `
    )

    filter_stuff(Shop, "Shop")
    filter_stuff(inventory, "Inventory")
    filter_MoneyTab()

    setInterval(mainGameLoop, TICK_RATE)
}

//activates shop stuff
function filter_stuff(list, filter_type){
    const filter_buttons = Array.from(document.querySelectorAll(".filter"))
    btn = filter_buttons.find((btn) => btn.textContent === filter_type)
    btn.addEventListener("click", function(){
        document.querySelector(".items").innerHTML = " "
        
        if (filter_type === "Shop"){
            list.forEach((item) => {
                document.querySelector(".items").insertAdjacentHTML("beforeend", 
                `
                <div class = "item_card">
                    <h2>${item.Name}</h2>
                    <img src = "${item.image}">
                    <p>${item.description}</p>
                    <p>Buy it for only $${item.price}</p>
                    <button class = "ShopitemButton">Click here to buy this!</button>
                </div> 
                    
                    
                    `)
            })
        } else{
            list.forEach((item) => {
                document.querySelector(".items").insertAdjacentHTML("beforeend", 
                `
                <div class = "item_card">
                    <h2>${item.Name}</h2>
                    <img src = "${item.image}">
                    <p>${item.description}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button class = "InventoryitemButton">Click here to use this item!</button>
                </div> 
                    
                    
                    `)
            })
        }

    //activate the buttons
    if (filter_type === "Shop"){
        activateButtonShop()
    } else if (filter_type === "Inventory"){
        activateButtonInventory()
    }
    })
}

function filter_MoneyTab(){
    const button = document.querySelector(".filter_butMoney")
    button.addEventListener("click", function(){
        document.querySelector(".items").innerHTML = ""
        document.querySelector(".items").insertAdjacentHTML("beforeend", 
            `
            <div class = "item_card">
                <h2>Passive Income</h2>
                <img src = "src/Assets/Bank.png">
                <p>Earning $${passive_income} per second.</p>
            </div>
            <div class = "item_card">
                <h2>B-B-Bank UwU</h2>
                <img src = "src/Assets/Bank.png">
                <p>You so broke, you only have $${Money} LOL!</p>
            </div>
                
                
                `)
    })
}


function activateButtonShop(){
    allItemButton = document.querySelectorAll(".ShopitemButton")
    allItemButton.forEach((btn) => {
        btn.addEventListener("click", function(){
            const card = btn.closest(".item_card")
            //children 0: HeaderH2
            //children 1: Image
            //children 2: Description
            //children 3: Button
            const shopCard = Shop.find((items) => items.Name === card.children[0].textContent)
            const subtractMoney = shopCard.price

            if (inventory.length === 0){
                inventory.push(
                    {
                        Name: shopCard.Name,
                        image: shopCard.image,
                        quantity: 1,
                        description: shopCard.description,
                        use: shopCard.use,
                    }
                )
            } else{
                const isFound = inventory_isFound(shopCard)
                console.log(isFound)
                if (isFound === false){
                    inventory.push(
                    {
                        Name: shopCard.Name,
                        image: shopCard.image,
                        quantity: 1,
                        description: shopCard.description,
                        use: shopCard.use,
                    }
                        )
                } else if (isFound === true){
                    (inventory.find((item) => shopCard.Name === item.Name)).quantity += 1
                }



            }
            console.log(inventory)

            moneyBarUpdate(subtractMoney, shopCard)

        })
    })
}

function inventory_isFound(shopCard){
    let isFound = false
    
    inventory.forEach((inventory_item) => {
    if (shopCard.Name === inventory_item.Name){
        isFound = true
    }
    })
    return isFound
}



function moneyBarUpdate(subtractMoney){
    if (Money - subtractMoney > 0){
        Money -= subtractMoney
        const selected_bar = document.querySelector("#Money")
        selected_bar.innerHTML = `<p>Money: $${Money}</p>`
    }

}


function activateButtonInventory(){
    allInvButton = Array.from(document.querySelectorAll(".InventoryitemButton"))
    allInvButton.forEach((btn) => {
        btn.addEventListener("click", function(event){
            const card = event.target.closest(".item_card")
            inventory_item = inventory.find((item) => card.children[0].textContent === item.Name)

            if (inventory_item.quantity > 1){
                inventory_item.quantity -= 1
                card.children[3].textContent = `Quantity: ${inventory_item.quantity}`

                const selected_bar = document.querySelector(`#${inventory_item.use.target}`)
                if (inventory_item.use.target === "Saturation"){
                    if ( Saturation + inventory_item.use.effect > 100){
                        Saturation = 100
                    } else{
                        Saturation += inventory_item.use.effect
                    }
                    selected_bar.innerHTML = `<p>${inventory_item.use.target}: ${Saturation}%</p>`
                } else if (inventory_item.use.target === "Hydration"){
                    if (Hydration + inventory_item.use.effect > 100){
                        Hydration = 100
                    } else{
                        Hydration += inventory_item.use.effect
                    }
                    selected_bar.innerHTML = `<p>${inventory_item.use.target}: ${Hydration}%</p>`
                } else if (inventory_item.use.target === "Mental_Health"){
                    if (Mental_Health + inventory_item.use.effect > 100){
                        Mental_Health = 100
                    } else{
                        Mental_Health += inventory_item.use.effect
                    }
                    
                    selected_bar.innerHTML = `<p>${inventory_item.use.target}: ${Mental_Health}%</p>`
                }else if (inventory_item.use.target === "Happiness"){
                    if (Happiness + inventory_item.use.effect > 100){
                        Happiness = 100
                    } else{
                        Happiness += inventory_item.use.effect
                    }
                    selected_bar.innerHTML = `<p>${inventory_item.use.target}: ${Happiness}%</p>`
                }else if (inventory_item.use.target === "Health"){
                    if (Health + inventory_item.use.effect > 100){
                        Health = 100
                    } else{
                        Health += inventory_item.use.effect
                    }
                    selected_bar.innerHTML = `<p>${inventory_item.use.target}: ${Health}%</p>`
                }


            } else if (inventory_item.quantity === 1){
                const index = inventory.indexOf(inventory_item)
                inventory.splice(index, 1)
                card.remove()
                
            }
        })
    })
}

//When the button for adoption is clicked, trigger and start the game!
function adopt(){
    buttons = document.querySelectorAll(".Adopt")
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(event){
            current_pet_info = event.target.closest(".card")
            enter_game(current_pet_info)
            
        })
    })
}

//runs the important functions in the game loop
function mainGameLoop(){
    time += 1
    updateStatPercentage(time)
    moneyBarUpdate(-passive_income)
    
}


//Update all of the main bars. Passive decrease stuff
function updateStatPercentage(time){
    let selected_bar = null
    let fail = 0
    
    bars.forEach((bar) => {
        selected_bar = document.querySelector(`#${bar}`)
        
        if(bar === "Saturation"){
            if (Saturation === 0){
                fail += 1
            } 
            else if (time%2 === 0){
                Saturation -= 1
                selected_bar.innerHTML = `<p>${bar}: ${Saturation}%</p>`
            }
        }
        else if (bar === "Hydration"){
            if (Hydration === 0){
                fail += 1
            } 
            else if (time%1 === 0){
                Hydration -= 1
                selected_bar.innerHTML = `<p>${bar}: ${Hydration}%</p>`
            }
        }
        else if (bar === "Mental_Health"){
            if (Mental_Health === 0){
                fail += 1
            } 
            else if (time%3 === 0){
                Mental_Health -= 1
                selected_bar.innerHTML = `<p>${bar}: ${Mental_Health}%</p>`
            }
        }
        else if (bar === "Happiness"){
            if (Happiness === 0){
                fail += 1
            } 
            else if (time%4 === 0){
                Happiness -= 1
                selected_bar.innerHTML = `<p>${bar}: ${Happiness}%</p>`
            }
        }
        else if (bar === "Health"){    
            Health -= fail
            selected_bar.innerHTML = `<p>${bar}: ${Health}%</p>`
        }
    })
}



light_and_dark()
adopt()

