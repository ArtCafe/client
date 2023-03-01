import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'
import jwtDecode from "jwt-decode";

const initialState = {
    user: null,
    allusers: null,
    token: null,
    isLoading: false,
    status: null,
    loadingalluser: false,
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ username, password, }) => {
      try {
          const { data } = await axios.post('/auth/register', {
              username,
              password,
             // email,
          })
          if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
          return data
      } catch (error) {
          console.log(error)
      }
  },
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                password,
            })

            if (data.token) {
              window.localStorage.setItem('token', data.token)
          }
          
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getMee = createAsyncThunk('auth/loginUser', async () => {
    try {
        const { data } = await axios.get('/auth/me')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (params) => {
        try {
            const { data } = await axios.put('/auth/updateuser', params)  
          
            return data
        } catch (error) {
            console.log(error)
        }
    },
)


export const updatePost = createAsyncThunk(
    'post/updatePost',
    async (updatedPost) => {
        try {
            const { data } = await axios.put(
                `/posts/${updatedPost.id}`,
                updatedPost,
            )
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getallUser = createAsyncThunk(
    'auth/getallUser',
    async () => {
        try {
            const { data } = await axios.get('/auth/all')
        
        
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null

        },
        getMe(state, action) {
          const token = state.token;
    
          if (token) {
            const user = jwtDecode(token);
            return {
              ...state,
              token,
              name: user.name,
              email: user.email,
              _id: user._id,
              isAdmin: user.isAdmin,
              avatar: user.avatar,
              userLoaded: true,
            };
          } else return { ...state, userLoaded: true };
        },
    },
    extraReducers: (builder) => {
        // Register user
        builder.addCase(registerUser.pending, (state, action) => {
          return { ...state, status: "pending" };
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
          if (action.payload) {
          
            return {
              ...state,
              token: action.payload.token,
              user: action.payload.user,
              status: "success",
            };
          } else return state;
        });

        builder.addCase(registerUser.rejected, (state, action) => {
          return {
            ...state,
            status: "rejected",
            error: action.payload,
          };
        });
        builder.addCase(loginUser.pending, (state, action) => {
          return { ...state, status: "pending" };
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
         
           
            return {
              ...state,
              token: action.payload.token,
              user: action.payload.user,
              status: "success",
            };
          
        });
        builder.addCase(loginUser.rejected, (state, action) => {
          return {
            ...state,
            status: "rejected",
            error: action.payload
          };
        });

        builder.addCase(updateUser.pending, (state, action) => {
          return { ...state, status: "pending" };
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
         
           
            return {
              ...state,
             
              user: action.payload.user,
              status: "success",
            };
          
        });

        builder.addCase(updateUser.rejected, (state, action) => {
          return {
            ...state,
            status: "rejected",
            error: action.payload
          };
        });

     builder.addCase( getallUser.pending, (state, action) => {
          return { ...state,
            loadingalluser: true,
            status: "pending" };
        });

        builder.addCase( getallUser.fulfilled, (state, action) => {
         
           
            return {
              ...state,
              loadingalluser: false,
              allusers: action.payload.user,
              status: "success",
            };
          
        });
        
        builder.addCase( getallUser.rejected, (state, action) => {
          return {
            ...state,
            loadingalluser: true,
            status: "rejected",
            error: action.payload,
          };
        });


    },
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout, getMe} = authSlice.actions
export default authSlice.reducer