const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,100,20,5,1]
checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBereturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBereturned);


        } else {
            showMessage("Do you wanna wash plates");

        }
    } else {
        showMessage("Invalid Bill Amount");

    }
});

function calculateChange(amountToBereturned) {
for(let i =0; i<availableNotes.length;i++){
    const numberOfNotes = Math.trunc(
        amountToBereturned / availableNotes[i]
    );
    amountToBereturned %=  availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
}

}

function hideMessage() {
    message.style.display = "none";
}



function showMessage(msg) {
    message.getElementsByClassName.display = "block";
    message.innerText = msg;
}