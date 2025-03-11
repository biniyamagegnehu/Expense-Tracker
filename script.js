const expenses = [];
const totalAmount = 0;

const catagoryElement = document.querySelector('catagory');
const amountElement = document.querySelector('amount');
const dateElement = document.querySelector('date');
const addButton = document.querySelector('add-button');
const expenseTableBody = document.querySelector('expense-table-body');
const totalAmountCell = document.querySelector('total');

addButton.addEventListener("click" , () => {
    const catagory = catagoryElement.value;
    const amount = amountElement.value;
    const date = dateElement.value;

    if (catagory === "") {
        alert("Please select a catagory");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    if (date === "") {
        alert("Please enter the date");
        return;
    }

    expenses.push({catagory,amount,date});
});