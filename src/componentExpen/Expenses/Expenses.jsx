import React, { useState } from 'react'
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteryear, setFilteryear] = useState("2020")
    const expFilter = selectedyear => {
        setFilteryear(selectedyear);
    }
    const displayResultOnDropdown = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteryear;
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteryear} childToParent={expFilter} />
            <ExpensesChart expenses={displayResultOnDropdown} />

            <ExpensesList items={displayResultOnDropdown} />


        </Card>
    )
}

export default Expenses
