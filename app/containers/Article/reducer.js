/*
 *
 * Article reducer
 *
 */
import produce from 'immer';
import {
  FETCH_ARTICLE_TYPE_FAILED,
  FETCH_ARTICLE_TYPE_SUCCESS,
} from './constants';

export const initialState = {
  articleTypeList: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const articleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_ARTICLE_TYPE_SUCCESS:
        draft.articleTypeList = action.articleTypes;
        break;
      case FETCH_ARTICLE_TYPE_FAILED:
        draft.error = action.error;
        break;
    }
  });

export default articleReducer;
