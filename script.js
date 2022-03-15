
let submitBut = document.getElementById("formButton")
let username = document.getElementById("username")
let number = document.getElementById("phone-number")
let address = document.getElementById("address")
let email = document.getElementById("email")
// let house = document.getElementById("house");
let liens = document.getElementById("liens")
let lease = document.getElementById("lease");

submitBut.addEventListener("click", formInfo)

function formInfo() {
    console.log(lease.options.selectedIndex)
    console.log("Test")
    // console.log(house)
    // console.log(username.value, number.value, address.value)
    
    console.log( number.value,username.value, address.value, email.value)

    if(lease.options.selectedIndex === 0){
        console.log("Do you have a solar lease?: No")
    } else if (lease.options.selectedIndex===1){
        console.log("Do you have a solar lease?: Yes")
    }

    if(liens.options.selectedIndex === 0){
        console.log("Are there any liens or encumberances on the property?: No")
    } else {
        console.log("Are there any liens or encumberances on the property?: Yes")
    }

}