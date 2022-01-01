import { ADD_TO_CART, REMOVE_TO_CART, FETCH_TO_API, ADD_TO_Form, API_OF_DOG, REMOVE_DOG } from "../Constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const addToForm = (data) => {
  return {
    type: ADD_TO_Form,
    data: data,
  };
};


export const fetchApi = async (Dispatch) => {
    let arr = [];
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        arr = json;
      });
      Dispatch ({
      type: FETCH_TO_API,
      apidata: arr,
    })
  };
  
export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};
let arr = [];
export const fetchDogApi = async (Dispatch) => {
  await fetch("https://dog.ceo/api/breed/corgi/images")
  .then((response) => response.json())
  .then((json) => {
    arr = json.message;
  });

  Dispatch({
    type: API_OF_DOG,
    data: arr,
  });
  

}

export const removeDog = (data) => {
  let newarr = data.data.filter((item) => item!==data.item)
  
 
  return{
    type: REMOVE_DOG,
    data: newarr
  }

}