import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import  commentSlice  from './features/comment/commentSlice'
import mypostsSlice from './features/post/mypostsSlice'
import postSlice from './features/post/postSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postSlice,
        comment: commentSlice,
        myposts: mypostsSlice
    },
})
