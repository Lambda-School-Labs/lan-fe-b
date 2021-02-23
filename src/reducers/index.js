const initialState = {
<<<<<<< HEAD
    user: {},
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
    roles: []
=======
  user: {},
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
  rooms: [{ room: 'Lambda Staff' }],
>>>>>>> c48f458a0a28d40756ca035fd4b95e2eff759317
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

<<<<<<< HEAD
        case 'SET_CURRENT_POST_COMMENTS':
            return {
                ...state,
                currentPostComments: action.payload,
                individualPostCommentsAreFetching: false
            };

        case 'SET_ROLES':
            return {
                ...state,
                roles: action.payload.roles
            }
        
        default:
            return state;
    };
=======
    case 'SET_CURRENT_POST_COMMENTS':
      return {
        ...state,
        currentPostComments: action.payload,
        individualPostCommentsAreFetching: false,
      };

    default:
      return state;
  }
>>>>>>> c48f458a0a28d40756ca035fd4b95e2eff759317
};
