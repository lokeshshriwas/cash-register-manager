const price = document.getElementById("price")
const amount = document.getElementById("amount")
const btn = document.getElementById("btn")
const reset = document.getElementById("reset")
const cashtable = document.querySelectorAll('.cashtable')
const newArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

btn.addEventListener("click", function (){
    let valPrice = Number(price.value)
    let givenAmount = Number(amount.value)

    if(valPrice < givenAmount){
        let returnAmount = givenAmount - valPrice
        cashToReturn(returnAmount)
    }else{
        console.log("less amount given then the price")
    }
})

reset.addEventListener("click", function (){
    price.value = ''
    amount.value = ''
    for(let i = 0; i<cashtable.length; i++){
        cashtable[i].textContent = 0;
    }
})

let reminderAmount
function cashToReturn(para){
    for(let i = 0; i<newArray.length; i++ ){
        let printAmount = Math.trunc(para / newArray[i])
        cashtable[i].textContent =  printAmount
        reminderAmount = Math.trunc(para % newArray[i])
        para = reminderAmount
    }
}


