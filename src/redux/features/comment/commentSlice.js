import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const initialState = {
    comments: [],
    loading: false,
}

export const createComment = createAsyncThunk(
    'comment/createComment',
    async ({ postId, comment, username }) => {
        try {
            const { data } = await axios.post(`/comments/${postId}`, {
                postId,
                comment,
                username
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getPostComments = createAsyncThunk(
    'comment/getPostComments',
    async (postId) => {
        try {
            const { data } = await axios.get(`/posts/comments/${postId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        // Создание поста
        builder.addCase(createComment.pending, (state, action) => {
            return { ...state, status: "pending" };
          });
  
          builder.addCase(createComment.fulfilled, (state, action) => {
            if (action.payload) {
            
              return {
                ...state,
                token: action.payload.token,
                comments: action.payload.comment,
                status: "success",
              };
            } else return state;
          });
  
          builder.addCase(createComment.rejected, (state, action) => {
            return {
              ...state,
              status: "rejected",
              error: action.payload,
            } });
//
            builder.addCase(getPostComments.pending, (state, action) => {
                return { ...state, status: "pending" };
              });
      
              builder.addCase(getPostComments.fulfilled, (state, action) => {
                if (action.payload) {
                
                  return {
                    ...state,
                    token: action.payload.token,
                    comments: action.payload.comment,
                    status: "success",
                  };
                } else return state;
              });
      
              builder.addCase(getPostComments.rejected, (state, action) => {
                return {
                  ...state,
                  status: "rejected",
                  error: action.payload,
                } });
        /*
        [createComment.pending]: (state) => {
            state.loading = true
        },
        [createComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments.push(action.payload)
        },
        [createComment.rejected]: (state) => {
            state.loading = false
        },
        // Получение комментов
        [getPostComments.pending]: (state) => {
            state.loading = true
        },
        [getPostComments.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [getPostComments.rejected]: (state) => {
            state.loading = false
        },
    */},
})

export default commentSlice.reducer
