const initialState = {
  user: {},
  users: [],
  currentUser: {},
  posts: [],
  currentPost: {},
  currentPostComments: [],
  search: '',
  sort: '',
  filter: '',
  usersLikedPosts: [],
  usersLikedComments: [],
  individualPostIsFetching: false,
  individualPostCommentsAreFetching: false,
<<<<<<< HEAD
  rooms: [{ room: 'Lambda Staff' }],
  roles: []
=======
  roles: [],
  rooms: [],
>>>>>>> 5bcfa35ba64b7b0c5936c25e45fb74bded9c5b02
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };

    case 'START_FETCHING_CURRENT_POST':
      return {
        ...state,
        individualPostIsFetching: true,
      };

    case 'SET_CURRENT_POST':
      return {
        ...state,
        currentPost: action.payload,
        individualPostIsFetching: false,
      };

    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    case 'SET_USERS_LIKED_POSTS':
      return {
        ...state,
        usersLikedPosts: action.payload,
      };

    case 'SET_POSTS_COMMENTS':
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [action.payload, ...state.currentPost.comments],
        },
      };

    case 'SET_USERS_LIKED_COMMENTS':
      return {
        ...state,
        usersLikedComments: action.payload,
      };

    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    case 'START_FETCHING_CURRENT_POST_COMMENTS':
      return {
        ...state,
        individualPostCommentsAreFetching: true,
      };

    case 'SET_CURRENT_POST_COMMENTS':
      return {
        ...state,
        currentPostComments: action.payload,
        individualPostCommentsAreFetching: false,
      };

<<<<<<< HEAD
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload.users,
        };
        case 'SET_ROLES':
          return {
              ...state,
              roles: action.payload.roles
          }
      
=======
    case 'SET_ROLES':
      return {
        ...state,
        roles: action.payload,
      };

    case 'SET_ROOM':
      return {
        ...state,
        rooms: action.payload,
      };

    case 'ADD_ROOM':
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };

    case 'UPDATE_ROOM':
      return {
        ...state,
        rooms: state.rooms.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    case 'DELETE_ROOM':
      return {
        ...state,
        rooms: state.rooms.filter((item) => item.id != action.payload),
      };
>>>>>>> 5bcfa35ba64b7b0c5936c25e45fb74bded9c5b02

    default:
      return state;
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 5bcfa35ba64b7b0c5936c25e45fb74bded9c5b02
