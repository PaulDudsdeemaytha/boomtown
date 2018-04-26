// Defining our action creators
const GET_FETCH_ITEMS = 'GET_FETCH_ITEMS';
const GET_IS_LOADING = 'GET_IS_LOADING';
const GET_ERROR = 'GET_ERROR';
const GET_ITEM_FILTERS = 'GET_ITEM_FILTERS';
const GET_TAGS = 'GET_TAGS';

// Creating our action creators
const initialState = {
    items: [],
    isLoading: false,
    itemFilters: [],
    error: ''
};

export const get_is_loading = () => ({
    type: GET_IS_LOADING
});

export const get_item_filters = itemFilter => ({
    type: GET_ITEM_FILTERS,
    payload: itemFilter
});

export const get_error = error => ({
    type: GET_ERROR,
    payload: error
});
export const get_fetch_items = response => ({
    type: GET_FETCH_ITEMS,
    payload: response
});

export const get_tags = () => ({
    type: GET_TAGS
});

export const fetchItemsAndUsers = urls => dispatch => {
    const urls = ['http://localhost:3003/items', 'http://localhost:3003/users'];
    // removed the logic
    const combineItemsAndUsers = array => {
        array[0].map(item => {
            array[1].map(profile => {
                if (profile.id === item.itemowner) {
                    item.itemowner = profile;
                }
            });
        });
        console.log(array[0]);
        return array[0];
    };
    dispatch(get_is_loading());
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
        .then(item => dispatch(get_fetch_items(combineItemsAndUsers(item))))
        .catch(error => dispatch(get_error(error)));
};

// Creating Reducers
export default (state = initialState, action) => {
    switch (action.type) {
    case GET_FETCH_ITEMS: {
        const items = action.payload;
        return { ...state, items, isLoading: false, error: '' };
        break;
    }
    case GET_IS_LOADING: {
        return { ...state, isLoading: true, error: '' };
        break;
    }
    case GET_ITEM_FILTERS: {
        const itemFilters = [...state.itemFilters];
        if (!itemFilters.includes(action.payload)) {
            itemFilters.push(action.payload);
        }
        // todo create and else statement
        return { ...state, itemFilters };
    }
    case GET_ERROR: {
        return { ...state, isLoading: false, error: action.payload };
        break;
    }
    default: {
        return { ...state };
    }
    }
};
