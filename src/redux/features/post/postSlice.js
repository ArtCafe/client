import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const initialState = {
    posts: [],
    post: [],
    vidio: [],
    videos: [],
    popularPosts: [],
    loading: false,
}
/*[{

        _id	:"63d409fa0ee5a6adc42dd101",
        username:	"art",
        title:	"test",
        text:	"test test",
        imgUrl:	"",
        views:	0,
        author:	"63cf5fddd8020f1de7289c27",
        comments:	[],
        createdAt:	"2023-01-27T17:29:30.725Z",
        updatedAt:	"2023-01-27T17:29:30.725Z",
        __v:	0
      

    }], */
export const createPost = createAsyncThunk(
    'post/createPost',
    async (params) => {
        try {
            const { data } = await axios.post('/posts', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const createVideo = createAsyncThunk(
    'post/createVideo',
    async (params) => {
        try {
            const { data } = await axios.post('/posts/video', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const { data } = await axios.get('/posts/video/all')
        return data
    } catch (error) {
        console.log(error)
    }
})
export const getAllvideo = createAsyncThunk('post/getAllVideo', async () => {
    try {
        const { data } = await axios.get('/posts/video/all')
        return data
    } catch (error) {
        console.log(error)
    }
})



export const removePost = createAsyncThunk('post/removePost', async (id) => {
 console.log(id);
    try {
        const { data } = await axios.delete(`/posts/${id}`, id)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const updatePost = createAsyncThunk(
    'posts/updatePost',
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

//
export const getPost = createAsyncThunk(
    'post/getPost',
    async (postId) => {
        try {
            const { data } = await axios.get(`/posts/avatar/${postId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
         // Создание поста
         [createPost.pending]: (state) => {
            state.loading = true
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts.push(action.payload)
        },
        [createPost.rejected]: (state) => {
            state.loading = false
        },
          // Создание поста
          [createVideo.pending]: (state) => {
            state.loading = true
        },
        [createVideo.fulfilled]: (state, action) => {
            state.loading = false
            state.videos.push(action.payload)
        },
        [createVideo.rejected]: (state) => {
            state.loading = false
        },
        // Получаение всех постов
        [getAllPosts.pending]: (state) => {
            state.loading = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload.posts
            state.popularPosts = action.payload.popularPosts
        },
        [getAllPosts.rejected]: (state) => {
            state.loading = false
        },
         // Получаение всех постов
         [getAllvideo.pending]: (state) => {
            state.loading = true
        },
        [getAllvideo.fulfilled]: (state, action) => {
            state.loading = false
            state.video = action.payload.video
            //state.popularPosts = action.payload.popularPosts
        },
        [getAllvideo.rejected]: (state) => {
            state.loading = false
        },
        // Удаление поста
        // Удаление поста
        [removePost.pending]: (state) => {
            state.loading = true
        },
        [removePost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = state.posts.filter(
                (post) => post._id !== action.payload._id,
            )
        },
        [removePost.rejected]: (state) => {
            state.loading = false
        },
        // Обновление поста
        [updatePost.pending]: (state) => {
            state.loading = true
        },
        [updatePost.fulfilled]: (state, action) => {
            state.loading = false
            const index = state.posts.findIndex(
                (post) => post._id === action.payload._id,
            )
            state.posts[index] = action.payload
        },
        [updatePost.rejected]: (state) => {
            state.loading = false
        },
     
  // get post
        [getPost.pending]: (state) => {
            state.loading = true
        },
        [getPost.fulfilled]: (state, action) => {
            state.loading = false
            state.post = action.payload.post
        },
        [getPost.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default postSlice.reducer
