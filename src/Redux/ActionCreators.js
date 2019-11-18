import {ActionTypes} from './Types';

export const StoreLoad = () => ({
    type: ActionTypes.STORE_LOAD
});

export const DishLoad = () => ({
    type: ActionTypes.DISH_LOAD
});

export const RankStoreLoad = () => ({
    type: ActionTypes.RANK_STORE_LOAD
});

export const RankDishLoad = () => ({
    type: ActionTypes.RANK_DISH_LOAD
});