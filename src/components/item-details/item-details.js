import React, { useState, useEffect } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';



const Record = ({ label, label_key, data }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[label_key]}</span>
    </li>
  )
}


const ItemDetails = ({ itemId, children, getData, getImage }) => {

  const [state, setState] = useState({ data: {} })
  const { id, name } = state.data;

  const swapi = new SwapiService() //Request to backend - json
  
  // const peopleImage = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  // const planetImage = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

  const itemImg = getImage({id})

  useEffect(() => {
    getData(itemId)
      .then(data => {
        setState({ data })
      })
  }, [itemId])

  return (

    <div className="item-details card">
      <img className="item-image"
        src={itemImg} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (item) => {
              return React.cloneElement(
                item,
                { data: state.data }
              )
            })
          }
        </ul>
      </div>
    </div>
    
  );
}

export { ItemDetails, Record };
