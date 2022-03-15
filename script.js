
let submitBut = document.getElementById("formButton")
let username = document.getElementById("username")
let number = document.getElementById("phone-number")
let address = document.getElementById("address")
let email = document.getElementById("email")
let house = document.getElementById("house");
let liens = document.getElementById("liens")
let lease = document.getElementById("lease");
let mortgage = document.getElementById("mortgage");

let mortgageValue = document.getElementById("mortgageValue");
let howLong = document.getElementById("howLong");

let mortgageQuestion = "Do you have a mortgage"
let mortageAnswer;

let liveQuestion = "Do you want to live in the house after you sell it?"
let liveAnswer;

let leaseQuestion = "Do you have a solar lease?"
let leaseAnswer;

let liensQuestion = "Are there any liens or encumberances on the property?"
let liensAnswer;

submitBut.addEventListener("click", formInfo)

function formInfo() {
    console.log(lease.options.selectedIndex)
    console.log("Test")
    // console.log(house)
    // console.log(username.value, number.value, address.value)

    console.log(number.value, username.value, address.value, email.value)

    if (lease.options.selectedIndex === 0) {
        leaseAnswer ="No"
        console.log(leaseQuestion, leaseAnswer)
       
    } else if (lease.options.selectedIndex === 1) {
        leaseAnswer ="Yes"
        console.log(leaseQuestion,leaseAnswer)
    }

    if (liens.options.selectedIndex === 0) {
        liensAnswer = "No"
        console.log(liensQuestion, liensAnswer)
    } else {
        liensAnswer = "Yes"
        console.log(liensQuestion,liensAnswer)
    }


    if (mortgage.options.selectedIndex === 0) {
        mortageAnswer = "No"
        console.log(mortgageQuestion, ":", mortageAnswer)

    } else {
        mortageAnswer = "Yes"
        console.log(mortgageQuestion, ":", mortageAnswer, ":", mortgageValue.value)

    }

    if (house.options.selectedIndex === 0) {
        liveAnswer = "No"
        console.log(liveQuestion, ":", liveAnswer)

    } else {
        liveAnswer = "Yes";
        console.log(liveQuestion, ":", liveAnswer, "how long would you like to live there:", howLong.value)

    }

}