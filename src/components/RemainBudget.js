import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainBudget = () => {
    const { allocation, Location, maxBudget,totalBudget, avilableBudget } = useContext(AppContext);
    
    return (
        <div className='alert alert-primary'>
            <span>Remining: {Location}{avilableBudget}</span>
        </div>
    );
};

export default RemainBudget;
