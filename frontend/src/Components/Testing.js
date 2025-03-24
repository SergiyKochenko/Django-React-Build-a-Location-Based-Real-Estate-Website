import React, { useEffect, useState, useReducer } from 'react'
import { useImmerReducer } from 'use-immer'

function Testing() {

    const initialState = {
        AppleCount: 1,
        BananaCount: 1,
        message: 'Hello World',
        happy: false,
    }

    function ReducerFunction(draft, action) {
        switch (action.type) {
            case 'INCREMENT_APPLE':
               draft.AppleCount = draft.AppleCount + 1
               break
           
            case 'CHANGE_EVERYTHING':

                draft.BananaCount = draft.BananaCount + 10
                draft.message = action.customMessage
                draft.happy = true
                break

            default:
                break
        }

    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState)
    
  return (
    <>
    <div>
        Right now, the Apple count is {state.AppleCount} and the Banana count is {state.BananaCount}</div>
        <div> now, the Bananas count is {state.BananaCount} and the Apples count is {state.AppleCount}</div>
        <div>Right now, the message {state.message}</div>
        {state.happy ? (
            <h1>Thanks for happy</h1>
        ) : (
            <h1>Sorry, you are not happy</h1>
        )}

        <br/>
        
    
    <button onClick={() => dispatch({type: 'INCREMENT_APPLE'})}>Increment Apple</button>
    <br/>
    <button onClick={() => dispatch({type: 'INCREMENT_BANANA'})}>Increment Banana</button>
    <br/>
    <button onClick={() => dispatch({type: 'DECREMENT_APPLE'})}>Decrement Apple</button>
    <br/>
    <button onClick={() => dispatch({type: 'DECREMENT_BANANA'})}>Decrement Banana</button>
    <br/>
    <button onClick={() => dispatch({type: 'CHANGE_EVERYTHING', customMessage: 'mesage comes from the dispatch'})}>Change Everything</button>   
   
        
    </>
  )
}

export default Testing
