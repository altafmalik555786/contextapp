import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  FETCH_TO_API,
  ADD_TO_Form,
  API_OF_DOG,
  REMOVE_DOG,
} from "../Constants";

export default function cardItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cartData: action.data }];
    case REMOVE_TO_CART:
      state.pop();
      return [...state];

    default:
      return state;
  }
}

export function apiItem(apistate = [], action) {
  switch (action.type) {
    case FETCH_TO_API:
      return {
        ...apistate,
        newData: action.apidata,
      };
    default:
      return apistate;
  }
}

export function apiDogItem(apidogstate = [], action) {
  switch (action.type) {
    case API_OF_DOG:
      return {
        ...apidogstate,
        data: action.data,
      };
      case REMOVE_DOG:
        return {
          ...apidogstate,
          data: action.data,
        };
    default:
      return apidogstate;
  }
}

export function formItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_Form:
      return {
        ...state,
        formData: action.data,
      };

    default:
      return state;
  }
}


export function removeDog(state = [], action) {
  switch (action.type) {


    default:
      return state;
  }
}

