export const CONTACT_POST_START = "CONTACT_POST_START";
export const CONTACT_POST_SUCCESS = "CONTACT_POST_SUCCESS";
export const CONTACT_POST_ERROR = "CONTACT_POST_ERROR";

export const postContactStarted = () => {
  return {
    type: CONTACT_POST_START,
  };
};

export const postContactError = () => {
  return {
    type: CONTACT_POST_ERROR,
  };
};

export const postContactSuccess = (contact) => {
  return {
    type: CONTACT_POST_SUCCESS,
    payload: contact
  };
};
