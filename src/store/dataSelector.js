import {createSelector} from 'reselect'

const dataState = (state)=>state.dataReducer?.data;
const success = (state)=> state.dataReducer?.success;


export const getRedColorItems = createSelector(
    dataState,
    success,
    (colors, success)=> success ? colors.filter((colorObject)=> colorObject?.color === "red") : []
)