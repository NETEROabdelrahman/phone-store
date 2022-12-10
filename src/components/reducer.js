const reducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            return {
                ...state,
                products:action.payLoad1,
                cart:action.payLoad2,
                detail:action.payLoad3
            }
        }
        case 'handleDetail': {
            return {
                ...state,
                detail:action.payLoad
            }
        }
        case 'openModal': {
            return {
                ...state,
                modalOpen: true,
                modalDetails:action.payLoad
                
            }
        }
        case 'closeModal': {
            return {
                ...state,
                modalOpen: false,
            }
        }
        case 'increment': {
            return {
                ...state,
                cart:action.payLoad
            }
        }
        case 'decrement': {
            return {
                ...state,
                cart:action.payLoad
            }
        }
        case 'removeItem': {
            return {
                ...state,
                products:action.payLoad2,
                cart: action.payLoad1,
            }
        }
        case 'clearCart': {
            return {
                ...state,
                products:action.payLoad2,
                cart: []
            }
        }
        case 'addTotal': {
            return {
                ...state,
                cartSubTotal:action.payLoad1,
                cartTax:action.payLoad2,
                cartTotal:action.payLoad3,
            }
        }
            
            
    
        default:
            break;
    }
    
    return state;
}

export default reducer