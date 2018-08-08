import { createStore } from 'redux';

const initialState = {};

export function rootreducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export let store = createStore(rootreducer, initialState);
