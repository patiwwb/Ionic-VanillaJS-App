const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Input';
    alert.message = 'Please enter a valid Expense Reason & Expense Amount.';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <=0) {
        presentAlert();
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount; //second plus symbol converts string to number - ie enteredAmount now num.
    totalExpensesOutput.textContent = totalExpenses;


    clear();
});

cancelBtn.addEventListener('click', clear);