import React from 'react'
import ListAnime from './listAnime'

describe('<ListAnime />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListAnime />)
  })
})