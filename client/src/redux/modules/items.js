const initialState = {
  items: []
};
export const fetchItemsAndUsers = () => dispatch => {
  const urls = ["http://localhost:3000/items", "http://localhost:3000/users"];
  Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
    array => {
      console.log(array);
      array[0].map(item => {
        array[1].map(profile => {
          if (profile.id === item.itemowner) {
            item.itemowner = profile;
          }
        });
      });
      this.setState({ itemsData: array[0] });
      console.log(this.props.itemsData);
    }
  );
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
