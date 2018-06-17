export const homeReducer = (state = {number: 0}, action) =>
{
    switch(action.type)
    {
        case "INCREASE":
            return { ...state, number: state.number + action.value }
        default:
            return state;
    }
}