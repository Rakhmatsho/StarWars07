import React, { useState } from 'react'
import ItemList from '../item-list';
import { ItemDetails, Record } from '../item-details';
import Row from '../row/row';
import withSwapi from '../hoc';


const leftElementMethods = (swapi) => ({ getData: swapi.getAllPeople })
const NewItemList = withSwapi(ItemList, leftElementMethods)


const rightElemetMethods = (swapi) => ({ getData: swapi.getPerson, getImage: swapi.getPersonImage })
const NewItemDetails = withSwapi(ItemDetails, rightElemetMethods)


const PeoplePage = () => {

  const [state, setState] = useState({ itemId: 1 })

  const leftElement = (
    <NewItemList setItemId={(id) => setState({ itemId: id })}>
      {(item) => `${item.name}`}
    </NewItemList>
  )

  const rightElement = (
    <NewItemDetails itemId={state.itemId}>
      <Record label='Gender:' label_key='gender' />
      <Record label='Eye color:' label_key='eyeColor' />
      <Record label='Birth year:' label_key='birthYear' />
    </NewItemDetails>
  )

  return (
    <Row left={leftElement} right={rightElement} />
  )

}

export default PeoplePage;