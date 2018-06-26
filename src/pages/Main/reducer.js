export const mainReducer = (state = {favouriteBeers: [], popupBeer: {}, beerInCart: [], showMode: "All"}, action) =>
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
        case "CHANGE_SHOW_MODE":
            return{
                ...state,
                showMode: action.mode
            }
        case "CHANGE_BEER_IN_CART":

            const currentBeerInCart = state.beerInCart.slice();
            const beerIndex = currentBeerInCart.map(e => e.beerId).indexOf(action.beerId);

            if(action.amount === 0) action.amount = -currentBeerInCart[beerIndex].amount
            
            if(beerIndex === -1)
            {
                if(action.amount > 0)
                {
                    currentBeerInCart.push({beerId: action.beerId, amount: action.amount})
                }
            }
            else
            {
                currentBeerInCart[beerIndex].amount += action.amount
                if(currentBeerInCart[beerIndex].amount <= 0)
                {
                    currentBeerInCart.splice(beerIndex, 1)
                }
            }
            
            return{
                ...state,
                beerInCart: currentBeerInCart
            }
        default:
            return state;
    }
}