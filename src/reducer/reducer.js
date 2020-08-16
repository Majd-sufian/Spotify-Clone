export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  ids: [],
  indexList: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        user: action.token,
      };

    case "SET_PLAYLISTS":
      const playlistId = action.playlists.items.map((item) => item.id);

      return {
        ...state,
        playlists: action.playlists,
        ids: playlistId,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "CHANGE_INDEX":
      return {
        indexList: action.indexList,
      };

    default:
      return state;
  }
};

export default reducer;
