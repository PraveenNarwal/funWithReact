import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const [editMode, setEditMode] = useState(false)

    const saveExpenseHandler = (enterExpenData) => {
        const expenseData = {
            ...enterExpenData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditMode(false);
    };
    const startEdit = () => {
        setEditMode(true);
    }
    const stopEdit = () => {
        setEditMode(false);
    }

    return (
        <div className='new-expense'>
            {!editMode && <button onClick={startEdit}>Add more Expenses</button>}
            {editMode && <ExpenseForm saveExpenseData={saveExpenseHandler} cancelTheEdit={stopEdit} />}
        </div>
    )
}

export default NewExpense
