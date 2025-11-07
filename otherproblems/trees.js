function trees(list){
    let increaseList = []
    let decreaseList = []
    let increase = 0
    let decrease = 0
    list.forEach((tree) => {
        if ((tree > increaseList[increaseList.length - 1]) || (increaseList.length === 0)){
            increaseList.push(tree)
        } else {
            if (increase < increaseList.length){
                increase = increaseList.length
            }
            increaseList = [tree]
        }
        if ((tree < decreaseList[decreaseList.length - 1]) || (decreaseList.length === 0)){
            decreaseList.push(tree)

        } else {
            if (decrease < decreaseList.length){
                decrease = decreaseList.length
            }
            decreaseList = [tree]
        }
    })

    if (decrease < decreaseList.length){
        decrease = decreaseList.length
    }
    if (increase < increaseList.length){
        increase = increaseList.length
    }



    return (`${increase}, ${decrease}`)
}


let list = [1, 3, 4, 2]
console.log(trees(list))
list = [2, 1, 4, 6, 8, 2, 9, 5, 2, 3]
console.log(trees(list))