import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

import{takeEvery, put} from 'redux-saga/effects'
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('SET_INFO_MOVIE', setInfoMovie);
    yield takeEvery('UPDATE_MOVIES', updateMovies);
} 

function* updateMovies(action){
    try {
      yield axios.put('/api/movies', action.payload);
      console.log('PUT REQ:',action.payload)
    } catch (err){
      console.log('PUT ERROR:',err);
    }
  }

function* getMovies(){
    try{
        const response = yield axios.get('/api/movies')
        yield put ({ type: 'SET_MOVIES',payload: response.data})
    }catch(error){
        console.log('Error from getMovies', error);
        
    }
}
function* getGenres(){
    try{
        const response = yield axios.get('/api/genres')
        yield put ({ type: 'SET_GENRES',payload: response.data})
    }catch(error){
        console.log('Error from getGenre', error);
        
    }
}


function* setInfoMovie(action){
    console.log(action.payload)
    try{
      const response = yield axios.get('/api/movies/details/'+ action.payload);
      yield put({type: 'INFO_MOVIE', payload: response.data})
    }catch(err){
      console.log(err);
    }
  }
  
  const infoMovies = (state=[], action)=>{
    switch(action.type){
      case 'INFO_MOVIE':
        return action.payload
      default:
        return state
    }
  }
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        infoMovies,
        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
