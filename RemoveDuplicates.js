import React, { useState } from 'react';

const RemoveDuplicates = () => {
    const [nums, setNums] = useState([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
    const [k, setK] = useState(0);

    const removeDuplicates = () => {
        if (nums.length === 0) return;

        let uniqueIndex = 1; // Initialize the unique element index
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[uniqueIndex] = nums[i];
                uniqueIndex++;
            }
        }

        // Set the remaining elements to null
        for (let i = uniqueIndex; i < nums.length; i++) {
            nums[i] = null;
        }

        setK(uniqueIndex);
        setNums([...nums]); // Update the state with the modified array
    };

    return (
        <div>
            <h1>Remove Duplicates from Sorted Array</h1>
            <button onClick={removeDuplicates}>Remove Duplicates</button>
            <p>Number of unique elements: {k}</p>
            <p>Array: {JSON.stringify(nums)}</p>
        </div>
    );
};

export default RemoveDuplicates;
