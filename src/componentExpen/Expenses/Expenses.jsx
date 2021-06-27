import React, { useState } from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

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
            {displayResultOnDropdown.length === 0 ? (<p>Nothing is here</p>) : (

                displayResultOnDropdown.map(m =>
                    <ExpenseItem
            