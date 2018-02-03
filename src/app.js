import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// ActionCreator
const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

// Store
const store = createStore(counter)

// Component
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({
        type: 'INCREMENT'
      }) }
      onDecrement={() => store.dispatch({
        type: 'DECREMENT'
      })}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)

render()
