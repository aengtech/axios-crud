import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPost = () => API.get('/');
export const createPost = (newPopst) => API.post('/upload/post', newPost);
export const update = ( id, updatedPost ) => API.patch(`/${id}`, updatedPost);


// controllers || actions

export const get = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
  
        dispatch({ type: 'FETCH_NEW', payload: data });
    } catch (error) {
        console.log(error.message);
    }
  }
  
  export const create = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: 'CREATE_NEW', payload: data });
    } catch (error) {
        console.log(error.message);
    }
  }