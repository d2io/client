/*
 *
 * Article actions
 *
 */

import {
  FETCH_ARTICLE_TYPE_FAILED,
  FETCH_ARTICLE_TYPE_SUCCESS,
  ARTICLE_TYPE_REQUEST,
} from './constants';

export const requestArticleType = () => ({
  type: ARTICLE_TYPE_REQUEST,
});

export const fetchArticleTypeSuccess = articleTypes => ({
  type: FETCH_ARTICLE_TYPE_SUCCESS,
  articleTypes,
});

export const fetchArticleTypeFailed = error => ({
  type: FETCH_ARTICLE_TYPE_FAILED,
  error,
});
