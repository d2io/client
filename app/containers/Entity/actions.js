/*
 *
 * Entity actions
 *
 */

// Entity
import {
  FETCH_ENTITY,
  FETCH_ENTITY_FAILED,
  FETCH_ENTITY_SUCCESS,
} from './constants';

export const fetchEntity = url => ({
  type: FETCH_ENTITY,
  url,
});

export const fetchEntitySuccess = entities => ({
  type: FETCH_ENTITY_SUCCESS,
  entities,
});

export const fetchEntityFailed = error => ({
  type: FETCH_ENTITY_FAILED,
  error,
});
