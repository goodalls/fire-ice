import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houses, swornMembers} from './houses-reducer';


const rootReducer = combineReducers({
  fake,
  houses,
  swornMembers
});


export default rootReducer;
