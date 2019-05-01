/*
 *
 * Picture reducer
 *
 */
import produce from 'immer';
import {
  FETCH_PICTURE_TYPE_SUCCESS,
  FETCH_PICTURE_TYPE_FAILED,
} from './constants';

export const initialState = {
  picTypeList: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const pictureReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PICTURE_TYPE_SUCCESS:
        draft.picTypeList = action.pictureTypes;
        break;
      case FETCH_PICTURE_TYPE_FAILED:
        draft.error = action.error;
        break;
    }
  });

export default pictureReducer;
