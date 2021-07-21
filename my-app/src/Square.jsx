import React, {useState} from 'react';

const Square = () => {
    const [value, setValue] = useState(null);

    const squareOnClick = () => {
        setValue('X');
    };

    return (
      <button className="square" onClick={squareOnClick}> 
       {value}
      </button>
    );
};

export default Square;