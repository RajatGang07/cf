import { STORE_PAGE_NUMBER, ITEMS_PER_PAGE } from "../constant/tableConstant";

let initialState = {
    page: 1,
    itemsPerPage: 3
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PAGE_NUMBER:
            return {
                ...state,
                page: action.page,
            };

        case ITEMS_PER_PAGE:
            return {
                ...state,
                itemsPerPage: action.itemsPerPage,
            };
        default:
            return state;
    }
};

export default tableReducer;