import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ClanUsersReducer from './reducer-clan-users';
import ItemsReducer from './reducer-items';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    clanUsers: ClanUsersReducer,
    items: ItemsReducer
});

export default allReducers
