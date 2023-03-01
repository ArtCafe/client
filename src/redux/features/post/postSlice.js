import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const initialState = {
    post: [],
    posts: null,
    postsall: null,
    vidio: [],
    videos: [],
    popularPosts:null,
    loading: false,
   
}

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
        const { data } = await axios.get('/posts/all')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const postHome = createAsyncThunk('post/postHome', async () => {
    try {
        const { data } = await axios.get('/posts/home/me')
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

export const liked = createAsyncThunk('post/liked', async (id) => {
    try {
        const { data } = await axios.put(`/posts/likes/${id}`, id)
        return data
    } catch (error) {
        console.log(error)
    }
})
//extraReducers: (builder) => {
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
//wrong
      liked(state, action) {

        const post = state.posts.findIndex(
          (post) => post._id === action.payload._id,
        );
  
   
          state.posts[post._id] = {
            ...state.post,
            likes: state.post.likes + 1,
          }


        }
       
      
    },
    extraReducers: (builder) => {
         // Создание поста
         builder.addCase(createPost.pending, (state, action) => {
            return {
                
                ...state,
                loading : true,
                status: "pending" };
          });

          builder.addCase(createPost.fulfilled, (state, action) => {
            if (action.payload) {
            
              return {
                ...state,
                loading : false,
                posts: action.payload.push.posts,
                status: "success",
              };
            } else return state;
          });
       
          builder.addCase(createPost.rejected, (state, action) => {
            return {
              ...state,
              loading : true,
              status: "rejected",
              error: action.payload,
            };
          }); 

//get all post
          builder.addCase(getAllPosts.pending, (state, action) => {
            return {
                
                ...state,
                loading : true,
                status: "pending" };
          });

          builder.addCase(getAllPosts.fulfilled, (state, action) => {
            if (action.payload) {
            
              return {
                ...state,
                loading : false,
                posts: action.payload.posts,
                popularPosts: action.payload.popularPosts,
                status: "success",
              };
            } else return state;
          });
       
          builder.addCase(getAllPosts.rejected, (state, action) => {
            return {
              ...state,
              loading : true,
              status: "rejected",
              error: action.payload,
            };
          }); 
   
        builder.addCase(createVideo.pending, (state, action) => {
            return {
                
                ...state,
                loading : true,
                status: "pending" };
          });

          builder.addCase(createVideo.fulfilled, (state, action) => {
            if (action.payload) {
            
              return {
                ...state,
                loading : false,
                videos: action.payload.push.videos,
                status: "success",
              };
            } else return state;
          });
       
          builder.addCase(createVideo.rejected, (state, action) => {
            return {
              ...state,
              loading : true,
              status: "rejected",
              error: action.payload,
            };
          }); 

    
        // Получаение всех постов

      builder.addCase(postHome.pending, (state, action) => {
            return {
                
                ...state,
                loading : true,
                status: "pending" };
          });

          builder.addCase(postHome.fulfilled, (state, action) => {
            if (action.payload) {
            
              return {
                ...state,
                loading : false,
                posts: action.payload,
                status: "success",
              };
            } else return state;
          });
       
          builder.addCase(postHome.rejected, (state, action) => {
            return {
              ...state,
              loading : true,
              status: "rejected",
              error: action.payload,
            };
          }); 


      builder.addCase(getAllvideo.pending, (state, action) => {
        return {
            
            ...state,
            loading : true,
            status: "pending" };
      });

      builder.addCase(getAllvideo.fulfilled, (state, action) => {
        if (action.payload) {
        
          return {
            ...state,
            loading : false,
            video: action.payload.video,
            status: "success",
          };
        } else return state;
      });
   
      builder.addCase(getAllvideo.rejected, (state, action) => {
        return {
          ...state,
          loading : true,
          status: "rejected",
          error: action.payload,
        };
      }); 


      builder.addCase(removePost.pending, (state, action) => {
        return {
            
            ...state,
            loading : true,
            status: "pending" };
      });

      builder.addCase(removePost.fulfilled, (state, action) => {
        if (action.payload) {
        
          return {
            ...state,
            loading : false,
            posts: state.posts.filter((post) => post._id !== action.payload._id),
            status: "success",
          };
        } else return state;
      });
   
      builder.addCase(removePost.rejected, (state, action) => {
        return {
          ...state,
          loading : true,
          status: "rejected",
          error: action.payload,
        };
      }); 


      builder.addCase(updatePost.pending, (state, action) => {
        return {
            
            ...state,
            loading : true,
            status: "pending" };
      });

      builder.addCase(updatePost.fulfilled, (state, action) => {
        if (action.payload) {
            const index = state.posts.findIndex(
                (post) => post._id === action.payload._id,
            )
          
            
          return {
    
        // ...state,

         ...state.posts[index] = action.payload,
         
            loading : false,
            
            status: "success",
          };
        } else return state;
      });
   
      builder.addCase(updatePost.rejected, (state, action) => {
        return {
          ...state,
          loading : true,
          status: "rejected",
          error: action.payload,
        };
      }); 

      builder.addCase(getPost.pending, (state, action) => {
        return {
            
            ...state,
            loading : true,
            status: "pending" };
      });

      builder.addCase(getPost.fulfilled, (state, action) => {
        if (action.payload) {
        
          return {
            ...state,
            loading : false,
            post: action.payload.post,
            status: "success",
          };
        } else return state;
      });
   
      builder.addCase(getPost.rejected, (state, action) => {
        return {
          ...state,
          loading : true,
          status: "rejected",
          error: action.payload,
        };
      }); 
    
 }

})

export default postSlice.reducer

/*
builder.addCase(liked.pending, (state, action) => {
  return {
      
      ...state,
      loading : true,
      status: "pending" };
});
builder.addCase(liked.fulfilled, (state, action) => {
  if (action.payload) {
      const post = state.posts.findIndex(
          (post) => post._id === action.payload._id,
      )
     
     
    return {
   ...state,
   post,[likes]: action.push.likes,
  
      loading : false,
      
      status: "success",
    };
  } else return state;
});
builder.addCase(liked.rejected, (state, action) => {
  return {
    ...state,
    loading : true,
    status: "rejected",
    error: action.payload,
  };

*/