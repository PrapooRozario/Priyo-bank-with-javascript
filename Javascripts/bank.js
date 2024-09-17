// Deposit Oparation
const depositBalance = document.getElementById('deposit-balance');
const depositAmount = document.getElementById('deposit-amount');
const errorMsg = document.getElementById('error-msg');
// Withdraw oparation
const withdrawBalance = document.getElementById('withdraw-balance');
const withdrawAmount = document.getElementById('withdraw-amount');
// Balance Oparation
const balance = document.getElementById('balance');


// Deposit calculation

document.getElementById('deposit-btn').addEventListener('click', function(){

    const currentBalance = parseFloat(depositBalance.innerText);
    console.log(currentBalance);
    const amount = parseFloat(depositAmount.value);
    let finalbalance = parseFloat(balance.innerText);

    if(!NaN === false || amount > 0){

    const newBalance = currentBalance + amount;
    depositBalance.innerText = newBalance;
    depositAmount.value = '';
    
    let sum = finalbalance += amount;
    balance.innerText = sum;

    errorMsg.classList.add('invisible')
    }
    
    else{
    errorMsg.classList.remove('invisible')
    }
})

// Withdraw calculation
document.getElementById('withdraw-btn').addEventListener('click', function(){

    const amount = parseFloat(withdrawAmount.value);
   

    if(!NaN === false || amount > 0){const balance1 = parseFloat(balance.innerText);
    const newBalance = balance1 - amount;
    withdrawAmount.value = '';
    balance.innerText = newBalance;
    errorMsg.classList.add('invisible')
    }
    
    // Withdraw balance
    if(!NaN === false || amount > 0){
    const currentWithdrawBalance = parseFloat(withdrawBalance.innerText);
    const newWithdrawBalance = currentWithdrawBalance + amount;
    withdrawBalance.innerText = newWithdrawBalance;
    } 

    else{
        errorMsg.classList.remove('invisible')
    }
})






