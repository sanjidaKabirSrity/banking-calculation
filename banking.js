function getResult(inputID, amountID, isAdd) {
    const inputValue = document.getElementById(inputID).value;
    const ammountString = document.getElementById(amountID).innerText;
    const totalvalue = parseFloat(inputValue) + parseFloat(ammountString);
    document.getElementById(amountID).innerText = totalvalue;
    document.getElementById(inputID).value = "";

    const balanceString = document.getElementById("balance-amount").innerText;
        let totalBalance;
        if (isAdd) {
            totalBalance = parseFloat(inputValue) + parseFloat(balanceString);
        } else {
            totalBalance = parseFloat(balanceString) - parseFloat(inputValue);
        }
        document.getElementById("balance-amount").innerText = totalBalance;
}

document.getElementById("deposit-Btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("deposit-input")
    if (inputNumber.value>0) {
        getResult("deposit-input", "deposit-amount", true)
        document.getElementById("deposit-valid").style.display="none";
    }else{
        inputNumber.value="";
        document.getElementById("deposit-valid").style.display="block";
    }
})
document.getElementById("withdraw-Btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("withdraw-input")
    if (inputNumber.value>0) {
        getResult("withdraw-input", "withdraw-amount", false)
        document.getElementById("withdraw-valid").style.display="none";
    }else{
        inputNumber.value="";
        document.getElementById("withdraw-valid").style.display="block";
    }
})






/* function getInputValue(inputID) {
    const input = document.getElementById(inputID);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    input.value = "";
    return inputNumber;
}

function getAmount(inputNumber, amountID) {
    const amount = document.getElementById(amountID);
    const amountString = amount.innerText;
    const amountNumber = parseInt(amountString);

    const total = inputNumber + amountNumber;
    amount.innerText = total;
    return total;
}

function getBalance(){
    const balanceAmount = document.getElementById("balance-amount");
    const balanceAmountString = balanceAmount.innerText;
    const balanceAmountNumber = parseInt(balanceAmountString);
    return balanceAmountNumber;
}

function uploadBalance(inputNumber, isAdd) {
    const balanceAmount = document.getElementById("balance-amount");
    const balanceAmountString = balanceAmount.innerText;
    const balanceNumber=getBalance();
    const balanceAmountNumber = parseInt(balanceAmountString);

    if (isAdd == true) {
        balanceAmount.innerText = balanceNumber + inputNumber;
    } else {
        balanceAmount.innerText = balanceNumber - inputNumber;
    }
    return balanceAmount.innerText;
}

const depositSubmit = document.getElementById("deposit-Btn").addEventListener("click", function () {
        const depositInputNumber = getInputValue("deposit-input");
    if (depositInputNumber>0) {
        getAmount(depositInputNumber, "deposit-amount");
        // Balance Account 
        uploadBalance(depositInputNumber, true);
    }
})


const withdrawSubmit = document.getElementById("withdraw-Btn").addEventListener("click", function () {
    const withdrawInputNumber = getInputValue("withdraw-input");
    getAmount(withdrawInputNumber, "withdraw-amount");
        // Balance Account 
        uploadBalance(withdrawInputNumber, false);
    // if (withdrawInputNumber>0){
        
    // }
    
}) */