import {ActionTypes} from './Types';

export const Reducer = (store, action) => {
    switch(action.type){
        case ActionTypes.STORE_LOAD:
            return {};
        case ActionTypes.DISH_LOAD:
            return {};
        case ActionTypes.RANK_STORE_LOAD:
            return {};
        case ActionTypes.RANK_DISH_LOAD:
            return {};
        default:
            return {};
    }
}