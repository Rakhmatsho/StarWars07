import React, { useState } from 'react'
import ItemList from '../item-list';
import { ItemDetails, Record } from '../item-details';
import Row from '../row/row';
import withSwapi from '../hoc';


const leftElementMethods = (swapi) => ({ getData: swapi.getAllPlanets })
const NewItemList = withSwapi(ItemList, leftElementMethods)


const rightElemetMethods = (swapi) => ({ getData: swapi.getPlanet, getImage: swapi.getPlanetImage })
const NewItemDetails = withSwapi(ItemDetails, rightElemetMethods)

const PlanetsPage = () => {

  const [state, setState] = useState({ itemId: 2 })

  const leftElement = (
    <NewItemList setItemId={(id) => setState({ itemId: id })}>
      {(item) => `${item.name}`}
    </NewItemList>
  )

  const rightElement = (
    <NewItemDetails itemId={state.itemId}>
      <Record label='Population:' label_key='population' />
      <Record label='Rotation period:' label_key='rotationPeriod' />
      <Record label='Diameter:' label_key='diameter' />
    </NewItemDetails>
  )

  return (
    <Row left={leftElement} right={rightElement} />
  )
  
}

export default PlanetsPage