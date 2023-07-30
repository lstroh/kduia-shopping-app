import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetValue = () => {
    const { allocation, Location, maxBudget,totalBudget, avilableBudget } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Budget: {Location}
            <input type="number" placeholder={maxBudget} step="10" /></span>
        </div>
    );
};

export default BudgetValue;
