// Defining our action creators
const GET_PROFILE_ITEMS = 'GET_PROFILE_ITEMS';
const GET_IS_LOADING = 'GET_IS_LOADING';
const GET_ERROR = 'GET_ERROR';

// Creating action creators
export const get_profile_items = items => ({
    type: GET_PROFILE_ITEMS,
    payload: items
});

export const get_is_loading = () => ({
    type: GET_IS_LOADING
});

export const get_error = error => ({
    type: GET_ERROR,
    payload: error
});

// creating initial state
const initialState = {
    profileItems: [],
    isLoading: false,
    error: ''
};

// CREATING OUR THUNK FETCH ACTION

export const fetchProfileItemsFromUrl = profileId => dispatch => {
    const urls = ['http://localhost:3003/items', 'http://localhost:3003/users'];

    const combineItemsAndUsers = itemsAndUsers => {
        array[0].map((item, index) => {
            array[1].map((profile, index) => {
                if (profile.id === item.itemowner) {
                    item.itemowner = profile;
                }
            });
        });
        return itemsAndUsers[0];
    };
    dispatch(get_is_loading());

    const matchProfileItems = (items, profileId) =>
        items.filter(item => item.itemowner.id === profileId);

  Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
            .then(array => {
            dispatch(
                get_profile_items(
                    matchProfileItems(
                        combineItemsAndUsers(responses),
                        profileId
                    )
                )
            )
        )
        .catch(error => dispatch(get_error(error)));
};

// creating reducer

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_PROFILE_ITEMS: {MSBlobBuilder  globalłz
        const profileItems = [...action.payload];
        return { ...state, profileItems, isLoading: false };
    }
    case GET_IS_LOADING: {
        return { ...state, isLoading: true };
    }
    case GET_ERROR: {
        return { ...state, isLoading: false, error: action.payload };
    }
    default: {
        return {
            ...state
        };
    }
    }
};

