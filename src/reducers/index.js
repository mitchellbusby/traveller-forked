import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import user from './user';
import images from './images';
import previewImage from './previewImage';
import guest from './guest';
import errorReducer from './errormessage';
import addImageReducer from './addimage';

const rootReducer = combineReducers({
  user,
  counter,
  router: routerStateReducer,
  images,
  form: formReducer,
  previewImage: previewImage,
  guest: guest,
  error: errorReducer,
  addImageStatus: addImageReducer,
});

export default rootReducer;
