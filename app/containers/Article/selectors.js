import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the article state domain
 */

const selectArticleDomain = state => state.article || initialState;

const makeSelectArticleTypeList = () =>
  createSelector(
    selectArticleDomain,
    substate => substate.articleTypeList,
  );

const makeSelectArticleTypeError = () =>
  createSelector(
    selectArticleDomain,
    substate => substate.error,
  );

export {
  selectArticleDomain,
  makeSelectArticleTypeList,
  makeSelectArticleTypeError,
};
