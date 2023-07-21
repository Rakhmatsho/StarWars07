import React, { useState } from 'react'
import ItemList from '../item-list';
import { ItemDetails, Record } from '../item-details';
import Row from '../row/row';
import withSwapi from '../hoc';


const leftElementMethods = (swapi) => ({ getData: swapi.getAllStarships })
const NewItemList = withSwapi(ItemList, leftElementMethods)


const rightElemetMethods = (swapi) => ({ getData: swapi.getStarship, getImage: swapi.getStarshipImage })
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
      <Record label='Model:' label_key='model' />
      <Record label='Manufacturer:' label_key='manufacturer' />
      <Record label='Cost in credits:' label_key='costInCredits' />
      <Record label='Length:' label_key='length' />
      <Record label='Crew:' label_key='crew' />
      <Record label='Passengers:' label_key='passengers' />
      <Record label='Cargo capacity:' label_key='cargoCapacity' />
    </NewItemDetails>
  )

  return (
    <Row left={leftElement} right={rightElement} />
  )
  
}

export default PlanetsPage