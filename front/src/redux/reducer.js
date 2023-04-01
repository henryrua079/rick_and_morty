import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, GET_FAVORITES, ORDER} from './actions'

import Card from '../components/Card/Card';


const initialState = {
    myFavorites:[],
    allCharacters:[]
};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            return {
                ...state, 
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case DELETE_FAVORITE:
            return {...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
            }

        case FILTER:
            const {allCharacters} = state;
            const fil = allCharacters.filter((char)=> char.gender === action.payload)
            return{
                ...state,
                myFavorites: fil
                }

        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente' ? state.allCharacters.sort((a, b) => a.id - b.id): state.allCharacters.sort((a, b) => b.id - a.id)
            }


        case GET_FAVORITES:
            return{
                ...state,
                myFavorites: action.payload
            }
           



        default:
            return { ...state };

    }

};



export default rootReducer;