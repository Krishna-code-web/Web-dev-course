document.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('expense-form');
    let expenseList = document.getElementById('expense-list');
    let totalAmount = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let totalCost = 0;

    displayExpenses();

    form.addEventListener('submit', function(e){
        e.preventDefault()
        let expenseName = document.getElementById('expense-name').value.trim();
        let expenseAmount = document.getElementById('expense-amount').value.trim();
       
        let expense = {
            id: Date.now(),
            name: expenseName,
            amount: expenseAmount
        };

        document.getElementById('expense-name').value = "";
        document.getElementById('expense-amount').value = "";

        expenses.push(expense);
        storeLocalStorage();
        displayExpenses();
    })

    function displayExpenses(){
        expenseList.innerText = "";
        totalCost = 0;
        expenses.forEach(expense => {
            let element = document.createElement('li');
            element.innerHTML = `
            <span>${expense.name} - $${expense.amount}</span>
            <button data-id=${expense.id}>Delete</button>
            `;
            totalCost += parseInt(expense.amount);
            expenseList.appendChild(element);
        });
        totalAmount.innerText = totalCost;
    }

    expenseList.addEventListener("click", function(e){
        if(e.target.tagName === 'BUTTON'){
            let expenseId = parseInt(e.target.attributes['data-id'].value);
            expenses = expenses.filter(expense => expense.id !== expenseId);
            
            storeLocalStorage();
            totalAmount.innerText = totalCost;
            displayExpenses();
        }
    })

    function storeLocalStorage(){
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
})