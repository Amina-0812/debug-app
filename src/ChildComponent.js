import React from 'react';



//we first decalre the ChildComponent functional that receives props
const ChildComponent = ({ count }) => {
  //it calculates whether the 'count' prop received from the parent component is even
  const isEven = count % 2 === 0;
  return (
    <div>
      <h2>Child Component</h2>
      {/*we display the 'count' prop received fom the parent component*/}
      <p>Count received from parent: {count}</p>
      {/*displaying wether the "count' is even or odd*/}
      <p>Is count even? {isEven ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ChildComponent;