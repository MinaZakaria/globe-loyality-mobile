import {
  getActionType,

  SAVE_TO_LOCAL_STORAGE,
  LOAD_FROM_LOCAL_STORAGE,
  REMOVE_FROM_LOCAL_STORAGE,

  REQUEST,
  SUCCESS,
  FAILURE
} from './api';

/*
 * action types
 */

export const SAVE_TO_LOCAL_STORAGE_REQUEST = getActionType(SAVE_TO_LOCAL_STORAGE, REQUEST);
export const SAVE_TO_LOCAL_STORAGE_SUCCESS = getActionType(SAVE_TO_LOCAL_STORAGE, SUCCESS);
export const SAVE_TO_LOCAL_STORAGE_FAILURE = getActionType(SAVE_TO_LOCAL_STORAGE, FAILURE);

export const LOAD_FROM_LOCAL_STORAGE_REQUEST = getActionType(LOAD_FROM_LOCAL_STORAGE, REQUEST);
export const LOAD_FROM_LOCAL_STORAGE_SUCCESS = getActionType(LOAD_FROM_LOCAL_STORAGE, SUCCESS);
export const LOAD_FROM_LOCAL_STORAGE_FAILURE = getActionType(LOAD_FROM_LOCAL_STORAGE, FAILURE);

export const REMOVE_FROM_LOCAL_STORAGE_REQUEST = getActionType(REMOVE_FROM_LOCAL_STORAGE, REQUEST);
export const REMOVE_FROM_LOCAL_STORAGE_SUCCESS = getActionType(REMOVE_FROM_LOCAL_STORAGE, SUCCESS);
export const REMOVE_FROM_LOCAL_STORAGE_FAILURE = getActionType(REMOVE_FROM_LOCAL_STORAGE, FAILURE);

/*
 * action creators
 */
export function saveToLocalStorage(key, value) {
  return {
    type: SAVE_TO_LOCAL_STORAGE_REQUEST,
    payload: { key, value }
  };
}

export function saveToLocalStorageSuccess() {
  return {
    type: SAVE_TO_LOCAL_STORAGE_SUCCESS,
  };
}

export function saveToLocalStorageFailure(error = null) {
  return {
    type: SAVE_TO_LOCAL_STORAGE_FAILURE,
    payload: { error }
  };
}

export function loadFromLocalStorage(key) {
  return {
    type: LOAD_FROM_LOCAL_STORAGE_REQUEST,
    payload: { key }
  };
}

export function loadFromLocalStorageSuccess(data) {
  return {
    type: LOAD_FROM_LOCAL_STORAGE_SUCCESS,
    payload: { data }
  };
}

export function loadFromLocalStorageFailure(error = null) {
  return {
    type: LOAD_FROM_LOCAL_STORAGE_FAILURE,
    payload: { error }
  };
}

export function removeFromLocalStorage(key) {
  return {
    type: REMOVE_FROM_LOCAL_STORAGE_REQUEST,
    payload: { key }
  };
}

export function removeFromLocalStorageSuccess(data) {
  return {
    type: REMOVE_FROM_LOCAL_STORAGE_SUCCESS,
    payload: { data }
  };
}

export function removeFromLocalStorageFailure(error = null) {
  return {
    type: REMOVE_FROM_LOCAL_STORAGE_FAILURE,
    payload: { error }
  };
}

export default {
  saveToLocalStorage,
  saveToLocalStorageSuccess,
  saveToLocalStorageFailure,
  loadFromLocalStorage,
  loadFromLocalStorageSuccess,
  loadFromLocalStorageFailure,
  removeFromLocalStorage,
  removeFromLocalStorageSuccess,
  removeFromLocalStorageFailure,

  SAVE_TO_LOCAL_STORAGE_REQUEST,
  SAVE_TO_LOCAL_STORAGE_SUCCESS,
  SAVE_TO_LOCAL_STORAGE_FAILURE,
  LOAD_FROM_LOCAL_STORAGE_REQUEST,
  LOAD_FROM_LOCAL_STORAGE_SUCCESS,
  LOAD_FROM_LOCAL_STORAGE_FAILURE,
  REMOVE_FROM_LOCAL_STORAGE_REQUEST,
  REMOVE_FROM_LOCAL_STORAGE_SUCCESS,
  REMOVE_FROM_LOCAL_STORAGE_FAILURE
};
