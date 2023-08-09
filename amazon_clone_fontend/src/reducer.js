export const initialState = {
    basket: [],
};

//selecter
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_to_basket':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'Remove_From_Basket':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`Cant remove product (id: ${action.id} as its not in basket)`)
            }
            return {
                ...state,
                basket: newBasket
            }
        // this thing delete whole item 
        // return {
        //     ...state,
        //     basket: state.basket.filter(item => item.id !== action.id)
        // };
        default:
            return state;
    }
}

export default reducer;