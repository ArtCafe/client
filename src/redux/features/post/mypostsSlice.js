import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const initialState = {
   
    myposts: [],
    
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




export const getMyPosts = createAsyncThunk('post/getMyPosts', async ({getposts} ) => {
    console.log("slice",{getposts});
    try {
        const { data } = await axios.post('/posts/myposts/',{ getposts })
        return data
    } catch (error) {
        console.log(error)
    }
})


export const mypostsSlice = createSlice({
    name: 'myposts',
    initialState,
    reducers: {},
    extraReducers: {
      
       
        
        [getMyPosts.pending]: (state) => {
            state.loading = true
        },
        [getMyPosts.fulfilled]: (state, action) => {
            state.loading = false
           // state.myposts.push(action.payload.myposts)
           state.myposts = action.payload.data
        },
        
        [getMyPosts.rejected]: (state) => {
            state.loading = false
        },
  
    },
})

export default mypostsSlice.reducer
