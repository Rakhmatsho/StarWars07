import React from 'react'
// import ItemList from '../item-list';
// import ItemDetails from '../item-details';


const Row = ({ left, right }) => {

  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
}

export default Row;