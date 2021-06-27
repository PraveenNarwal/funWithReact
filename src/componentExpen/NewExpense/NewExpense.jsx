import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const saveExpenseHandler = (enterExpenData) => {
        const expenseData = {
            ...enterExpenData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm saveExpenseData={saveExpenseHandler} />
        </div>
    )
}

export default NewExpense
