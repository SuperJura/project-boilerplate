export const mainReducer = (state = {favouriteBeers: [], popupBeer: {}}, action) =>
{
    switch(action.type)
    {
        case "ADD_FAVOURITE_BEER":
            return { 
                ...state, 
                favouriteBeers: state.favouriteBeers.concat(action.value) 
            }
        case "REMOVE_FAVOURITE_BEER":
            return { 
                ...state, 
                favouriteBeers: state.favouriteBeers.filter(element => element != action.value)
            }
        case "SHOW_POPUP_BEER":
            return {
                ...state,
                popupBeer: action.value
            }
        case "REMOVE_POPUP_BEER":
            return {
                ...state,
                popupBeer: {}
            }
        default:
            return state;
    }
}