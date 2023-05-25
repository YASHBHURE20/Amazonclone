export const initialState = {
    basket: [ /*{
        id:"0001",
        title:"Voltas 1.5 ton Premium AC",
        price:35000,
        rating:5,
        image:"https://m.media-amazon.com/images/I/41Dd4+t6fsL._AC_SY135_.jpg"
    }*/],
    user: null
    
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEM TO BASKET 
            return{
                ...state,
                basket:[...state.basket, action.item],
            };
            break;
            case 'REMOVE_FROM_BASKET':
                // LOGIC FOR REMOVING ITEM FROM BASKET
                let newBasket = [...state.basket];

                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                if (index >=0)
                {
                    //item exist in basket , remoive it 
                    newBasket.splice(index,1);

                }
                else{
                    console.warn(
                        'cant remove product (id: ${action.id}) as it not in basket'
                    );
                }
                 

                return{...state, basket: newBasket };
             

                default:
                    return state;
    }
}

export default reducer;