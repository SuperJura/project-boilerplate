export const addFavouriteBeer = (value) =>({
    type: 'ADD_FAVOURITE_BEER',
    value
});

export const removeFavouriteBeer = (value) =>({
    type: 'REMOVE_FAVOURITE_BEER',
    value
});
    
export const showPopupBeer = (value) =>({
    type: 'SHOW_POPUP_BEER',
    value
});

export const removePopupBeer = () =>({
    type: 'REMOVE_POPUP_BEER'
});

export const changeBeerInCart = (beerId, amount) =>({
    type: 'CHANGE_BEER_IN_CART',
    beerId,
    amount
})