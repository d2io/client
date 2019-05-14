/*
 *
 * Entity reducer
 *
 */
import produce from 'immer';
import { FETCH_ENTITY_FAILED, FETCH_ENTITY_SUCCESS } from './constants';

export const initialState = {
  entities: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const entityReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_ENTITY_SUCCESS:
        draft.entities = action.entities;
        break;
      case FETCH_ENTITY_FAILED:
        draft.error = action.error;
        break;
    }
  });

export default entityReducer;
