import { combineReducers } from "redux";
import cardItem from './Reducer'
import { apiItem, formItem, apiDogItem } from "./Reducer";
export default combineReducers({
    cardItem,
    apiItem,
    formItem,
    apiDogItem    
})