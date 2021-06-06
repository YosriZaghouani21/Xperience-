import {
  FETCH_ALL_RECLAMATIONS,
  FETCH_ALL_RECLAMATIONS_SUCCESS,
  FETCH_ALL_RECLAMATIONS_FAIL,
  FETCH_RECLAMATION_DETAILS,
  FETCH_RECLAMATION_DETAILS_SUCCESS,
  FETCH_RECLAMATION_DETAILS_FAIL,
  ADD_RECLAMATION,
  ADD_RECLAMATION_SUCCESS,
  ADD_RECLAMATION_FAIL,
  CLEAR_ERRORS,
} from '../constants/reclamationConstants';

const initialState = {
  reclamations: [],
  reclamationDetails: {},
  isLoading: false,
};
export const reclamationReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_ALL_RECLAMATIONS:
      return {
        isLoading: true,
        reclamations: [],
      };
    case FETCH_ALL_RECLAMATIONS_SUCCESS:
      return {
        isLoading: false,
        reclamations: payload.reclamations,
      };
    case FETCH_ALL_RECLAMATIONS_FAIL:
      return {
        isLoading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case FETCH_RECLAMATION_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RECLAMATION_DETAILS_SUCCESS:
      return {
        isLoading: false,
        reclamation: payload,
      };
    case FETCH_RECLAMATION_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
      };
    case ADD_RECLAMATION:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_RECLAMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reclamation: payload,
      };
    case ADD_RECLAMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
