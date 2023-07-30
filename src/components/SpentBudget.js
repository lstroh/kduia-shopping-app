import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpentBudget = () => {
    const { allocation, Location, maxBudget,totalBudget, avilableBudget } = useContext(AppContext);
    
    return (
        <div className='alert alert-primary'>
            <span>Remining: {Location}{totalBudget}</span>
        </div>
    );
};

export default SpentBudget;
