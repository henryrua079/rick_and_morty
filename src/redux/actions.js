import axios from "axios";


export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


export const addFavorite = (char) => { 
    return{type: ADD_FAVORITE, payload: char}
//     return function (dispatch) {
//         const URL_BASE = "https://be-a-rym.up.railway.app/api";
//         const KEY = "4fd12c84aec2.d28eaefd84c3df1a2e0f";
//         axios(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((data)=>{dispatch({type: 'ADD_FAVORITE', payload: data.data})})
// }
}

export const deleteFavorite = (id) => {
   return { type: DELETE_FAVORITE, payload: id }
}

export const filterCards = (gender) => {
   return { type: FILTER, payload: gender }
}

export const orderCards = (id) => {
   return { type: ORDER, payload: id }
}




