const expenses = [];
let totalAmount = 0;

const catagoryElement = document.querySelector('.catagory');
const amountElement = document.querySelector('.amount');
const dateElement = document.querySelector('.date');
const addButton = document.querySelector('.add-button');
const expenseTableBody = document.querySelector('.expense-table-body');
const totalAmountCell = document.querySelector('.total');

addButton.addEventListener("click" , () => {
    const catagory = catagoryElement.value;
    const amount = parseFloat(amountElement.value);
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

    expenses.push({catagory:catagory,
                   amount:amount,
                   date:date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();
    const catagoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => {
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= parseFloat(expense.amount);
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    catagoryCell.textContent = expense.catagory;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteButton);
});

for(const expense of expenses) {
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();
    const catagoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteButton = document.createElement('button');

    deleteButton.addEventListener("click", () => {
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });

    catagoryCell.textContent = expense.catagory;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteButton);
}