import React, { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleHandler = (event) => {
        setEnterTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setEnterAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setEnterDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        console.log(expenseData);
        props.saveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enterAmount} min='0.01' step="0.01" onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enterDate} min="2019-0-01" max="2022-12-31" onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
