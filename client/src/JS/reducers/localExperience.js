import {
  CREATE_EXPERIENCE,
  ADD_IMAGE_TO_EXPERIENCE,
  ADD_IMAGE_TO_EXPERIENCE2,
  ADD_IMAGE_TO_EXPERIENCE3,
  ADD_IMAGE_TO_EXPERIENCE4,
} from '../constants/experienceConstants';

const initialState = {};
export const localExperience = (state = initialState, {type, payload}) => {
  switch (type) {
    case CREATE_EXPERIENCE:
      return {
        ...state,
        ...payload,
      };
    case ADD_IMAGE_TO_EXPERIENCE:
      return {
        ...state,

        photo: payload,
      };
    case ADD_IMAGE_TO_EXPERIENCE2:
      return {
        ...state,

        photo2: payload,
      };
    case ADD_IMAGE_TO_EXPERIENCE3:
      return {
        ...state,
        photo3: payload,
      };
    case ADD_IMAGE_TO_EXPERIENCE4:
      return {
        ...state,
        photo4: payload,
      };

    default:
      return state;
  }
};
